var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var lyr_MapatopogrficoIGN0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://www.ign.es/wms-inspire/mapa-raster?",
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
                              params: {
                                "LAYERS": "mtn_rasterizado",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Mapa topográfico IGN",
                            opacity: 1.000000,
                            
                            
                          });var lyr_OrtofotoIGNPNOA1 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://www.idee.es/wms/PNOA/PNOA?",
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
                              params: {
                                "LAYERS": "PNOA",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Ortofoto IGN PNOA",
                            opacity: 1.000000,
                            
                            
                          });var format_teselasforestales2 = new ol.format.GeoJSON();
var features_teselasforestales2 = format_teselasforestales2.readFeatures(geojson_teselasforestales2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_teselasforestales2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_teselasforestales2.addFeatures(features_teselasforestales2);var lyr_teselasforestales2 = new ol.layer.Vector({
                source:jsonSource_teselasforestales2, 
                style: style_teselasforestales2,
                title: "teselas forestales"
            });

lyr_MapatopogrficoIGN0.setVisible(false);lyr_OrtofotoIGNPNOA1.setVisible(true);lyr_teselasforestales2.setVisible(true);
var layersList = [baseLayer,lyr_MapatopogrficoIGN0,lyr_OrtofotoIGNPNOA1,lyr_teselasforestales2];
lyr_teselasforestales2.set('fieldAliases', {'POLIGON': 'POLIGON', 'TIPOESTR': 'TIPOESTR', 'ESTRATO': 'ESTRATO', 'N1': 'N1', 'N2': 'N2', 'N3': 'N3', 'ESP1': 'ESP1', 'O1': 'O1', 'E1': 'E1', 'ESP2': 'ESP2', 'O2': 'O2', 'E2': 'E2', 'ESP3': 'ESP3', 'O3': 'O3', 'E3': 'E3', 'FCC': 'FCC', 'FCCP': 'FCCP', 'ESTADO': 'ESTADO', 'NVAL': 'NVAL', 'UG': 'UG', 'ESP1_NESP-': 'ESP1_NESP-', 'hectareas': 'hectareas', 'ESP1_NameE': 'ESP1_NameE', });
lyr_teselasforestales2.set('fieldImages', {'POLIGON': 'TextEdit', 'TIPOESTR': 'TextEdit', 'ESTRATO': 'TextEdit', 'N1': 'TextEdit', 'N2': 'TextEdit', 'N3': 'TextEdit', 'ESP1': 'TextEdit', 'O1': 'TextEdit', 'E1': 'TextEdit', 'ESP2': 'TextEdit', 'O2': 'TextEdit', 'E2': 'TextEdit', 'ESP3': 'TextEdit', 'O3': 'TextEdit', 'E3': 'TextEdit', 'FCC': 'TextEdit', 'FCCP': 'TextEdit', 'ESTADO': 'TextEdit', 'NVAL': 'TextEdit', 'UG': 'TextEdit', 'ESP1_NESP-': 'TextEdit', 'hectareas': 'TextEdit', 'ESP1_NameE': 'TextEdit', });
lyr_teselasforestales2.set('fieldLabels', {'POLIGON': 'no label', 'TIPOESTR': 'no label', 'ESTRATO': 'no label', 'N1': 'no label', 'N2': 'no label', 'N3': 'no label', 'ESP1': 'no label', 'O1': 'no label', 'E1': 'no label', 'ESP2': 'no label', 'O2': 'no label', 'E2': 'no label', 'ESP3': 'no label', 'O3': 'no label', 'E3': 'no label', 'FCC': 'no label', 'FCCP': 'no label', 'ESTADO': 'no label', 'NVAL': 'no label', 'UG': 'no label', 'ESP1_NESP-': 'inline label', 'hectareas': 'no label', 'ESP1_NameE': 'no label', });
lyr_teselasforestales2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});