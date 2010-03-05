/**
 *
 * @author ilyas Bakouch
 * @copyright www.isbkch.com
 *
 * @version 1.0
 */

(function() {
	tinymce.PluginManager.requireLangPack('googlemaps');
	tinymce.create('tinymce.plugins.GooglemapsPlugin', {
		init : function(ed, url) {
			// Register commands
			ed.addCommand('mceGooglemap', function() {
				ed.windowManager.open({
					file : url + '/googlemaps.htm',
					width : 640 + parseInt(ed.getLang('googlemaps.delta_width', 0)),
					height : 480 + parseInt(ed.getLang('googlemaps.delta_height', 0)),
					inline : 1
				}, {
					plugin_url : url
				});
			});


      	ed.addButton('googlemaps', {
				title : 'googlemaps.desc',
				cmd : 'mceGooglemap',
				image : url + '/img/map_add.gif'
			});

		},

		getInfo : function() {
			return {
				longname : 'EklaGooglemaps',
				author : 'Ilyas Bakouch',
				authorurl : 'http://www.isbkch.com',
				infourl : 'http://www.isbkch.com'
			};
		}
	});

	// Register plugin
	tinymce.PluginManager.add('googlemaps', tinymce.plugins.GooglemapsPlugin);
})();