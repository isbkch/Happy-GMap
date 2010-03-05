var initEklaMap = function ()
{
    google.load("maps", "2");
    google.setOnLoadCallback(initMap);
}; // init

var initMap = function ()
{
    var divName = "Eklagooglemaps";
    var i=0;

    //recuperation des coordonnées depuis l'article
    var coords      = $$('div.'+divName+'').get('html');

    //boucle sur toutes les class qui s'appelle Eklagooglemaps
    $$('div.'+divName+'').each(function(e){
    

    var sep         = coords[i].indexOf(",");
    var Lat         = coords[i].substring(0,sep);
    var Lng         = coords[i].substr(sep+1);

    //le ID du Div courrant
    var currentDiv  = e.get('id');
    
    // Création de l'instance d'objet google.maps.Map2,
    var map = new google.maps.Map2($(currentDiv));
    //var map = new google.maps.Map2($(divName+i));
    
    // Centrage de la map sur un point, dont on connaît latitude et longitude :
    map.setCenter(new GLatLng(Lat,Lng), 5);

    // icon du petit marqueur rouge
    var icon= new GIcon();
    icon.image = "http://labs.google.com/ridefinder/images/mm_20_red.png";
    icon.shadow = "http://labs.google.com/ridefinder/images/mm_20_shadow.png";
    icon.iconSize = new GSize(12, 20);
    icon.shadowSize = new GSize(22, 20);
    icon.iconAnchor = new GPoint(6, 20);
    icon.infoWindowAnchor = new GPoint(5, 1);

    // Création du marqueur
    var point = new GLatLng(Lat,Lng);

    // Création d'un marqueur localisé sur le point
    var marker = new GMarker(point,{icon:G_DEFAULT_ICON, draggable: false});

    //ajout d'info bull sous forme de mini carte lors du clique sur le marqueur
    GEvent.addListener(marker, "click", function(){
        marker.showMapBlowup({
                zoomLevel: map.getZoom() + 2,
                mapType: G_NORMAL_MAP
            });
    });

    // Et ajout du marqueur à la carte
    map.addOverlay(marker);

    i++;//incrementation pour passer à la class suivante
  })

}; // initMap