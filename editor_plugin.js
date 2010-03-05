(function(){
    tinymce.PluginManager.requireLangPack('googlemaps');

    tinymce.create('tinymce.plugins.GooglemapsPlugin',{

        init:function(ed,url){
            ed.addCommand('mceGooglemap',function(){
                ed.windowManager.open({
                    file:url+'/googlemaps.htm',width:640+ parseInt(ed.getLang('googlemaps.delta_width',0)),height:500+parseInt(ed.getLang('googlemaps.delta_height',0)),inline:1},
                {plugin_url:url});
            });
            ed.addButton('googlemaps',{
                title:'googlemaps.desc',cmd:'mceGooglemap',image:url+'/img/map_add.gif'
            });
        },

        getInfo:function(){
            return{
                longname:'Googlemaps',
                author:'Ilyas bakouch',
                authorurl:'http://www.isbkch.com',
                infourl:'http://www.isbkch.com',
                version:tinymce.majorVersion+"." + tinymce.minorVersion
            };
        }
    });

    tinymce.PluginManager.add('googlemaps',tinymce.plugins.GooglemapsPlugin);})();