tinyMCEPopup.requireLangPack();
 function uID (){
    var uniqueID = new Date();
    return uniqueID.getTime();
};

var EklaMapDialog = {


	init : function() {
		var f = document.forms[0];
	},
        // Inserer la carte dans le document
	insert : function() {
		
                //recuperation des variables, manuel pour la version 1.0
		var strHtml = '';
		var coords      = document.forms[0].coords.value;

                if ( coords == "")
		{   //affichage du message d'erreur depuis le fichier de langue'
                    alert(tinyMCEPopup.getLang('googlemaps_dlg.missing_stuff'));
		}
		else
		{   //insertion du div et des coordonées qui seront convertis en
                    //map lors du chargement de la page
                    strHtml = '<div class="Eklagooglemaps" id="Eklagooglemaps'+uID()+'" style="background:#d3d3d3; border: 1px solid #000; width: 450px; height: 370px;">'+coords+'</div><br /><span style="font-size: x-small;"><em>Nom de la carte: </em></span>';
                    tinyMCEPopup.editor.execCommand('mceInsertContent', false, strHtml);
                    tinyMCEPopup.close();
		}
	}
};

tinyMCEPopup.onInit.add(EklaMapDialog.init, EklaMapDialog);