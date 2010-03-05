var initEklaMap = function ()
{
    google.load("maps", "2");
    google.setOnLoadCallback(initMap);
}; // init

var initMap = function ()
{
    var divName = "Eklagooglemaps";

    //recuperation des coordonnées depuis l'article
    //var coords      = $$('div.Eklagooglemaps').get('text');
    var coords      = $$('div.Eklagooglemaps').get('html');
   alert("coords: "+coords);
    var sep         = coords[0].indexOf(",");
    alert("sep: "+sep);
    var Lat         = coords[0].substring(0,sep);
    alert("Lat: "+Lat);
    var Lng         = coords[0].substr(sep+1);
    alert("Lng: "+Lng);

    //alert("lat: "+Lat+"\nlng: "+Lng);
    //var coords      = document.getElementById(divName).innerHTML;

    // Création de l'instance d'objet google.maps.Map2,
    var map = new google.maps.Map2($(divName));
    //var map = new google.maps.Map2(document.getElementById(divName));
    
    // Centrage de la map sur un point, dont on connaît latitude et longitude :
    map.setCenter(new GLatLng(Lat,Lng), 5);

    // icon du petit marqueur rouge
    var icon = new GIcon();
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
                zoomLevel: map.getZoom() - 2,
                mapType: G_NORMAL_MAP
            });
    });


    // Et ajout du marqueur à la carte
    map.addOverlay(marker);


}; // initMap