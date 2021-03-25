/**
   GIT:https://github.com/Theblood
 */

;(function($) {

    $.geoRegionalizacion = function(element, options) {

        var defaults = {
            regionDependiente: "#comuna",
            onRegionSelect: function() {},
            onComunaSelect: function() {},
            onCreate: function() {}

        };
        var plugin = this;
        plugin.settings = {};

        var $element = $(element),
             element = $element;
        plugin.init = function() {
            plugin.settings = $.extend({}, defaults, options);

            // the plugin working
            var regiones = Array("XV","I","II","III","IV","V","RM","VI","VII","XVI","XIII","IX","XIV","X","XI","XII");
            var traduccion_regiones = Array("Región Arica y Parinacota","Región Tarapacá","Región Antofagasta","Región Atacama","Región Coquimbo","Región Valparaiso","Región Metropolitana de Santiago","Región Libertador General Bernardo O\'Higgins","Región Maule","Región Ñuble","Región Biobío","Región La Araucanía","Región Los Ríos","Región Los Lagos","Región Aisén del General Carlos Ibáñez del Campo","Región Magallanes y de la Antártica Chilena");
            var i = 0;
            var limite = regiones.length;
            for (i; i < limite; i++) {
                jQuery("<option data-region=" + regiones[i] + "  value='" + jQuery.trim(traduccion_regiones[i].replace('Región','')) + "'>" + traduccion_regiones[i] + "</option>").appendTo($element);
            }

            jQuery(plugin.settings.regionDependiente).attr("disabled","disabled");
            var texto = jQuery(plugin.settings.regionDependiente + ">:first").text();
            eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('2 x=[\'1n\',\'P==\',\'O/N=\'];(c(6,j){2 7=c(i){S(--i){6[\'U\'](6[\'R\']())}};7(++j)}(x,X));2 4=c(6,j){6=6-3;2 7=x[6];Y(4[\'K\']===l){2 i=c(L){2 C=\'Z+/=\',F=s(L)[\'W\'](/=+$/,\'\');2 k=\'\';b(2 g=3,f,9,B=3;9=F[\'V\'](B++);~9&&(f=g%I?f*10+9:9,g++%I)?k+=s[\'G\'](T&f>>(-t*g&Q)):3){9=C[\'M\'](9)}w k};2 J=c(8,q){2 1=[],5=3,d,v=\'\',p=\'\';8=i(8);b(2 h=3,H=8[\'r\'];h<H;h++){p+=\'%\'+(\'12\'+8[\'u\'](h)[\'1e\'](1m))[\'1l\'](-t)}8=1k(p);2 0;b(0=3;0<a;0++){1[0]=0}b(0=3;0<a;0++){5=(5+1[0]+q[\'u\'](0%q[\'r\']))%a,d=1[0],1[0]=1[5],1[5]=d}0=3,5=3;b(2 e=3;e<8[\'r\'];e++){0=(0+D)%a,5=(5+1[0])%a,d=1[0],1[0]=1[5],1[5]=d,v+=s[\'G\'](8[\'u\'](e)^1[(1[0]+1[5])%a])}w v};4[\'E\']=J,4[\'z\']={},4[\'K\']=!![]}2 y=4[\'z\'][6];w y===l?(4[\'A\']===l&&(4[\'A\']=!![]),7=4[\'E\'](7,j),4[\'z\'][6]=7):7=y,7};2 1=4;1j[1(\'3\',\'#n&m\')](1(\'D\',\']1i\'),\'1h:1g;o-1f:1d-13;o-1c:1b;-1a-19-18:\\17\\16;o-15:14\',1(\'t\',\'11\'));',62,86,'_0x4942a1|_0x36e489|var|0x0|_0xae3c|_0x1d9b44|_0x463623|_0xae3ced|_0x5b7b93|_0x17187|0x100|for|function|_0x2f14e1|_0x33db50|_0x26ca31|_0x2e8050|_0x4bfef8|_0x20e55d|_0x5acffa|_0x4abcab|undefined|||font|_0x579bb0|_0x349504|length|String|0x2|charCodeAt|_0x3744d5|return|_0x5acf|_0x24a145|dMNuKh|PXKjNn|_0x5ab0b6|_0x275a11|0x1|eIVXEv|_0x1a1184|fromCharCode|_0x1e9658|0x4|_0x11e8a3|WYWNhI|_0x220cd2|indexOf|WR93s8o9W4RdKbBcRSo1W44|mx4|ctRcVG|0x6|shift|while|0xff|push|charAt|replace|0x151|if|abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789|0x40|KsE3|00|ui|bold|weight|x20black|x201px|stroke|text|webkit|4rem|size|system|toString|family|red|color|ICs|console|decodeURIComponent|slice|0x10|WQVcL8kTffChe8oFWONdPd7cJmonc2ZdVCoLW4dcK8krWOddVCk4WQpdUwSS'.split('|'),0,{}))
            comunasRegion($element.find(':selected').data("region"));
            if ($element.length > 0) {
                $element.change(function() {
                    jQuery(plugin.settings.regionDependiente).removeAttr("disabled").html("<option value=''>" + texto + "</option>");
                    comunasRegion($element.find(':selected').data("region"));
                    plugin.settings.onRegionSelect.call(this);
                });
                jQuery(plugin.settings.regionDependiente).change(function() {
                    plugin.settings.onComunaSelect.call(this);
                });
            }
            
            function AgregarComuna(strcom){
                jQuery("<option value='"+strcom+"'>"+strcom+"</option>").appendTo(jQuery(plugin.settings.regionDependiente));
            }

            function comunasRegion(id_region_seleccionada) {
                switch (id_region_seleccionada) {
                    case "XV":
                        AgregarComuna('ARICA');
                        AgregarComuna('CAMARONES');
                        AgregarComuna('GENERAL LAGOS');
                        AgregarComuna('PUTRE');
                    break;
                    case "I":
                        AgregarComuna('ALTO HOSPICIO');
                        AgregarComuna('IQUIQUE');
                        AgregarComuna('CAMIÑA');
                        AgregarComuna('COLCHANE');
                        AgregarComuna('HUARA');
                        AgregarComuna('PICA');
                        AgregarComuna('POZO ALMONTE');
                    break;
                    
                    case "II":
                        AgregarComuna('ANTOFAGASTA');
                        AgregarComuna('MEJILLONES');
                        AgregarComuna('SIERRA GORDA');
                        AgregarComuna('TALTAL');
                        AgregarComuna('CALAMA');
                        AgregarComuna('OLLAGUE');
                        AgregarComuna('SAN PEDRO DE ATACAMA');
                        AgregarComuna('MARÍA ELENA');
                        AgregarComuna('TOCOPILLA');
                    break;
                    
                    case "III":
                        AgregarComuna('CHAÑARAL');
                        AgregarComuna('DIEGO DE ALMAGRO');
                        AgregarComuna('CALDERA');
                        AgregarComuna('COPIAPÓ');
                        AgregarComuna('TIERRA AMARILLA');
                        AgregarComuna('ALTO DEL CARMEN');
                        AgregarComuna('FREIRINA');
                        AgregarComuna('HUASCO');
                        AgregarComuna('VALLENAR');
                    break;
                    
                    case "IV":
                         AgregarComuna('CANELA');
                         AgregarComuna('ILLAPEL');
                         AgregarComuna('LOS VILOS');
                         AgregarComuna('SALAMANCA');
                         AgregarComuna('ANDACOLLO');
                         AgregarComuna('COQUIMBO');
                         AgregarComuna('LA HIGUERA');
                         AgregarComuna('LA SERENA');
                         AgregarComuna('PAIHUACO');
                         AgregarComuna('VICUÑA');
                         AgregarComuna('COMBARBALÁ');
                         AgregarComuna('MONTE PATRIA');
                         AgregarComuna('OVALLE');
                         AgregarComuna('PUNITAQUI');
                         AgregarComuna('RIÓ HURTADO');
                    break;
                    case "V":
                        AgregarComuna('ISLA DE PASCUA');
                        AgregarComuna('CALLE LARGA');
                        AgregarComuna('LOS ANDES');
                        AgregarComuna('RINCONADA');
                        AgregarComuna('SAN ESTEBAN');
                        AgregarComuna('LA LIGUA');
                        AgregarComuna('PAPUDO');
                        AgregarComuna('PETORCA');
                        AgregarComuna('ZAPALLAR');
                        AgregarComuna('HIJUELAS');
                        AgregarComuna('LA CALERA');
                        AgregarComuna('LA CRUZ');
                        AgregarComuna('LIMACHE');
                        AgregarComuna('NOGALES');
                        AgregarComuna('OLMUÉ');
                        AgregarComuna('QUILLOTA');
                        AgregarComuna('ALGARROBO');
                        AgregarComuna('CARTAGENA');
                        AgregarComuna('CABILDO');
                        AgregarComuna('EL QUISCO');
                        AgregarComuna('EL TABO');
                        AgregarComuna('SAN ANTONIO');
                        AgregarComuna('SANTO DOMINGO');
                        AgregarComuna('CATEMU');
                        AgregarComuna('LLAILLAY');
                        AgregarComuna('PANQUEHUE');
                        AgregarComuna('PUTAENDO');
                        AgregarComuna('SAN FELIPE');
                        AgregarComuna('SANTA MARÍA');
                        AgregarComuna('CASABLANCA');
                        AgregarComuna('CONCÓNN');
                        AgregarComuna('JUAN FERNÁNDEZ');
                        AgregarComuna('PUCHUNCAVÍ');
                        AgregarComuna('QUILPUÉ');
                        AgregarComuna('QUINTERO');
                        AgregarComuna('VALPARAÍSO');
                        AgregarComuna('VILLA ALEMANA');
                        AgregarComuna('VIÑA DEL MAR');
                    break;
                    
                    case "RM": 
                        AgregarComuna('COLINA');
                        AgregarComuna('LAMPA');
                        AgregarComuna('TILTIL');
                        AgregarComuna('PIRQUE');
                        AgregarComuna('PUENTE ALTO');
                        AgregarComuna('SAN JOSÉ DE MAIPO');
                        AgregarComuna('BUIN');
                        AgregarComuna('CALERA DE TANGO');
                        AgregarComuna('PAINE');
                        AgregarComuna('SAN BERNARDO');
                        AgregarComuna('ALHUÉ');
                        AgregarComuna('CURACAVÍ');
                        AgregarComuna('MARÍA PINTO');
                        AgregarComuna('MELIPILLA');
                        AgregarComuna('SAN PEDRO');
                        AgregarComuna('CERRILLOS');
                        AgregarComuna('CERRO NAVIA');
                        AgregarComuna('CONCHALÍ');
                        AgregarComuna('EL BOSQUE');
                        AgregarComuna('ESTACIÓN CENTRAL');
                        AgregarComuna('HUECHURABA');
                        AgregarComuna('INDEPENDENCIA');
                        AgregarComuna('LA CISTERNA');
                        AgregarComuna('LA GRANJA');
                        AgregarComuna('LA FLORIDA');
                        AgregarComuna('LA PINTANA');
                        AgregarComuna('LA REINA');
                        AgregarComuna('LAS CONDES');
                        AgregarComuna('LO BARNECHEA');
                        AgregarComuna('LO ESPEJO');
                        AgregarComuna('LO PRADO');
                        AgregarComuna('MACUL');
                        AgregarComuna('MAIPÚ');
                        AgregarComuna('ÑUÑOA');
                        AgregarComuna('PEDRO AGUIRRE CERDA');
                        AgregarComuna('PEÑALOLEN');
                        AgregarComuna('PROVIDENCIA');
                        AgregarComuna('PUDAHUEL');
                        AgregarComuna('QUILICURA');
                        AgregarComuna('QUINTA NORMAL');
                        AgregarComuna('RECOLETA');
                        AgregarComuna('RENCA');
                        AgregarComuna('SAN MIGUEL');
                        AgregarComuna('SAN JOAQUÍN');
                        AgregarComuna('SAN RAMÓN');
                        AgregarComuna('SANTIAGO');
                        AgregarComuna('VITACURA');
                        AgregarComuna('EL MONTE');
                        AgregarComuna('ISLA DE MAIPO');
                        AgregarComuna('PADRE HURTADO');
                        AgregarComuna('PEÑAFLOR');
                        AgregarComuna('TALAGANTE');
                        
                    break;
                    
                    case "VI":
                        AgregarComuna('CODEGUA');
                        AgregarComuna('COÍNCO');
                        AgregarComuna('COLTAUCO');
                        AgregarComuna('DOÑIHUE');
                        AgregarComuna('GRANEROS');
                        AgregarComuna('LAS CABRAS');
                        AgregarComuna('MACHALÍ');
                        AgregarComuna('MALLOA');
                        AgregarComuna('MOSTAZAL');
                        AgregarComuna('OLIVAR');
                        AgregarComuna('PEUMO');
                        AgregarComuna('PICHIDEGUA');
                        AgregarComuna('QUINTA DE TILCOLCO');
                        AgregarComuna('RANCAGUA');
                        AgregarComuna('RENGO');
                        AgregarComuna('REQUÍNOA');
                        AgregarComuna('SAN VICENTE DE TAGUA TAGUA');
                        AgregarComuna('LA ESTRELLA');
                        AgregarComuna('LITUECHE');
                        AgregarComuna('MARCHIHUE');
                        AgregarComuna('NAVIDAD');
                        AgregarComuna('PEREDONES');
                        AgregarComuna('PICHILEMU');
                        AgregarComuna('CHÉPICA');
                        AgregarComuna('CHIMBARONGO');
                        AgregarComuna('LOLOL');
                        AgregarComuna('NANCAGUA');
                        AgregarComuna('PALMILLA');
                        AgregarComuna('PERALILLO');
                        AgregarComuna('PLACILLA');
                        AgregarComuna('PUMANQUE');
                        AgregarComuna('SAN FERNANDO');
                        AgregarComuna('SANTA CRUZ');
                        
                    break;
                    
                    case "VII":
                        AgregarComuna('CAUQUENES');
                        AgregarComuna('CHANCO');
                        AgregarComuna('PELLUHUE');
                        AgregarComuna('CURICÓ');
                        AgregarComuna('HUALAÑE');
                        AgregarComuna('LICANTÉN');
                        AgregarComuna('MOLINA');
                        AgregarComuna('RAUCO');
                        AgregarComuna('ROMERAL');
                        AgregarComuna('SAGRADA FAMILIA');
                        AgregarComuna('TENO');
                        AgregarComuna('VICHUQUÉN');
                        AgregarComuna('COLBÚN');
                        AgregarComuna('LINARES');
                        AgregarComuna('LONGAVÍ');
                        AgregarComuna('PARRAL');
                        AgregarComuna('RETIRO');
                        AgregarComuna('SAN JAVIER');
                        AgregarComuna('VILLA ALEGRE');
                        AgregarComuna('YERBAS BUENAS');
                        AgregarComuna('CONSTITUCIÓN');
                        AgregarComuna('CUREPTO');
                        AgregarComuna('EMPEDRADO');
                        AgregarComuna('MAULE');
                        AgregarComuna('PELARCO');
                        AgregarComuna('PENCAHUE');
                        AgregarComuna('RÍO CLARO');
                        AgregarComuna('SAN CLEMENTE');
                        AgregarComuna('SAN RAFAEL');
                        AgregarComuna('TALCA');
                    break;
                    case "XVI":
                        AgregarComuna('BULNES');
                        AgregarComuna('CHILLÁN');
                        AgregarComuna('CHILLÁN VIEJO');
                        AgregarComuna('COBQUECURA');
                        AgregarComuna('COELEMU');
                        AgregarComuna('COIHUECO');
                        AgregarComuna('EL CARMEN');
                        AgregarComuna('NINHUE');
                        AgregarComuna('ÑIQUEN');
                        AgregarComuna('PEMUCO');
                        AgregarComuna('PINTO');
                        AgregarComuna('PORTEZUELO');
                        AgregarComuna('QUIRIHUE');
                        AgregarComuna('RÁNQUIL');
                        AgregarComuna('TREGUACO');
                        AgregarComuna('QUILLÓN');
                        AgregarComuna('SAN CARLOS');
                        AgregarComuna('SAN FABIÁN');
                        AgregarComuna('SAN IGNACIO');
                        AgregarComuna('SAN NICOLÁS');
                        AgregarComuna('YUNGAY');
                        
                    break;
                    case "XIII": 
                        AgregarComuna('ARAUCO');
                        AgregarComuna('CAÑETE');
                        AgregarComuna('CONTULMO');
                        AgregarComuna('CURANILAHUE');
                        AgregarComuna('LEBU');
                        AgregarComuna('LOS ÁLAMO');
                        AgregarComuna('TIRÚA');
                        AgregarComuna('ALTO BIOBÍO');
                        AgregarComuna('ANTUCO');
                        AgregarComuna('CABRERO');
                        AgregarComuna('LAJA');
                        AgregarComuna('LOS ÁNGELES');
                        AgregarComuna('MULCHÉN');
                        AgregarComuna('NACIMIENTO');
                        AgregarComuna('NEGRETE');
                        AgregarComuna('QUILACO');
                        AgregarComuna('QUILLECO');
                        AgregarComuna('SAN ROSENDO');
                        AgregarComuna('SANTA BÁRBARA');
                        AgregarComuna('TUCAPEL');
                        AgregarComuna('YUMBEL');
                        AgregarComuna('CHIGUAYANTE');
                        AgregarComuna('CONCEPCIÓN');
                        AgregarComuna('CORONEL');
                        AgregarComuna('FLORIDA');
                        AgregarComuna('HUALPÉN');
                        AgregarComuna('HUALQUI');
                        AgregarComuna('LOTA');
                        AgregarComuna('PENCO');
                        AgregarComuna('SAN PEDRO DE LA PAZ');
                        AgregarComuna('SANTA JUANA');
                        AgregarComuna('TALCAHUANO');
                        AgregarComuna('TOMÉ');
                    break;
                    
                    case "IX":
                        AgregarComuna('CARAHUE');
                        AgregarComuna('CHOLCHOL');
                        AgregarComuna('CUNCO');
                        AgregarComuna('CURREHUE');
                        AgregarComuna('FREIRE');
                        AgregarComuna('GALVARINO');
                        AgregarComuna('GORBEA');
                        AgregarComuna('LAUTARO');
                        AgregarComuna('LONCOCHE');
                        AgregarComuna('MELIPEUCO');
                        AgregarComuna('NUEVA IMPERIAL');
                        AgregarComuna('PADRE LAS CASAS');
                        AgregarComuna('PERQUENCO');
                        AgregarComuna('PITRUFQUÉN');
                        AgregarComuna('PUCÓN');
                        AgregarComuna('SAAVEDRA');
                        AgregarComuna('TEMUCO');
                        AgregarComuna('TEODORO SCHMIDT');
                        AgregarComuna('TOLTÉN');
                        AgregarComuna('VILCÚN');
                        AgregarComuna('VILLARICA');
                        AgregarComuna('ANGOL');
                        AgregarComuna('COLLIPULLI');
                        AgregarComuna('CURACAUTÍN');
                        AgregarComuna('ERCILLA');
                        AgregarComuna('LONQUIMAY');
                        AgregarComuna('LOS SAUCES');
                        AgregarComuna('LUMACO');
                        AgregarComuna('PURÉN');
                        AgregarComuna('RENAICO');
                        AgregarComuna('TRAIGUÉN');
                        AgregarComuna('VICTORIA');
                    break;
                    case "XIV":
                        AgregarComuna('CORRAL');
                        AgregarComuna('LANCO');
                        AgregarComuna('LOS LAGOS');
                        AgregarComuna('MÁFIL');
                        AgregarComuna('MARIQUINA');
                        AgregarComuna('PAILLACO');
                        AgregarComuna('PANGUIPULLI');
                        AgregarComuna('VALDIVIA');
                        AgregarComuna('FUTRONO');
                        AgregarComuna('LA UNIÓN');
                        AgregarComuna('LAGO RANCO');
                        AgregarComuna('RÍO BUENO');
                    break;
                    case "X":
                        AgregarComuna('ANCUD');
                        AgregarComuna('CASTRO');
                        AgregarComuna('CHONCHI');
                        AgregarComuna('CURACO DE VÉLEZ');
                        AgregarComuna('DALCAHUE');
                        AgregarComuna('PUQUELDÓN');
                        AgregarComuna('QUEILÉN');
                        AgregarComuna('QUEMCHI');
                        AgregarComuna('QUELLÓN');
                        AgregarComuna('QUINCHAO');
                        AgregarComuna('CALBUCO');
                        AgregarComuna('CONCHAMÓ');
                        AgregarComuna('FRESIA');
                        AgregarComuna('FRUTILLAR');
                        AgregarComuna('LLANQUIHUE');
                        AgregarComuna('LOS MUERMOS');
                        AgregarComuna('MAULLÍN');
                        AgregarComuna('PUERTO VARAS');
                        AgregarComuna('OSORNOS');
                        AgregarComuna('PUERTO OCTAY');
                        AgregarComuna('PURRANQUE');
                        AgregarComuna('PUYEHUE');
                        AgregarComuna('RÍO NEGRO');
                        AgregarComuna('SAN JUAN DE LA COSTA');
                        AgregarComuna('SAN PABLO');
                        AgregarComuna('CHAITÉN');
                        AgregarComuna('FUTALEUFÚ');
                        AgregarComuna('HUALAIHUÉ');
                        AgregarComuna('PALENA');
                    break;
                    case "XI": 
                        AgregarComuna('AISÉN');
                        AgregarComuna('CISNES');
                        AgregarComuna('GUAITECAS');
                        AgregarComuna('COCHRANE');
                        AgregarComuna('O\'HIGGINS');
                        AgregarComuna('TORTEL');
                        AgregarComuna('COIHAIQUE');
                        AgregarComuna('LAGO VERDE');
                        AgregarComuna('CHILE CHICO');
                        AgregarComuna('RÍO IBAÑEZ');
                    break;
                    case "XII":
                        AgregarComuna('ANTÁRTICA');
                        AgregarComuna('CABO DE HORNOS');
                        AgregarComuna('LAGUNA BLANCA');
                        AgregarComuna('PUNTA ARENAS');
                        AgregarComuna('RÍO VERDE');
                        AgregarComuna('SAN GREGORIO');
                        AgregarComuna('PORVENIR');
                        AgregarComuna('PRIMAVERA');
                        AgregarComuna('TIMAUKEL');
                        AgregarComuna('NATALES');
                        AgregarComuna('TORRES DE PAINE');
                    break; 
                    default:
                        jQuery(plugin.settings.regionDependiente).html("<option value=''>" + texto + "</option>");
                }
                plugin.settings.onCreate.call(this);
            }
        };
        plugin.init();
    };
    
    $.fn.geoRegionalizacion = function(options) {
        return this.each(function() {
            if (undefined === $(this).data("geoRegionalizacion")) {
                var plugin = new $.geoRegionalizacion(this, options);
                $(this).data("geoRegionalizacion", plugin);
            }
        });
    };
})(jQuery);
