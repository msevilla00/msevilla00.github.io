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
var format_AytoZgz_0 = new ol.format.GeoJSON();
var features_AytoZgz_0 = format_AytoZgz_0.readFeatures(json_AytoZgz_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AytoZgz_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_AytoZgz_0.addFeatures(features_AytoZgz_0);var lyr_AytoZgz_0 = new ol.layer.Vector({
                source:jsonSource_AytoZgz_0, 
                style: style_AytoZgz_0,
                title: '<img src="styles/legend/AytoZgz_0.png" /> Ayto. Zgz'
            });var format_OSM_1 = new ol.format.GeoJSON();
var features_OSM_1 = format_OSM_1.readFeatures(json_OSM_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OSM_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_OSM_1.addFeatures(features_OSM_1);var lyr_OSM_1 = new ol.layer.Vector({
                source:jsonSource_OSM_1, 
                style: style_OSM_1,
                title: '<img src="styles/legend/OSM_1.png" /> OSM'
            });

lyr_AytoZgz_0.setVisible(true);lyr_OSM_1.setVisible(true);
var layersList = [baseLayer,lyr_AytoZgz_0,lyr_OSM_1];
lyr_AytoZgz_0.set('fieldAliases', {'TIPO_CARRIL': 'TIPO_CARRIL', });
lyr_OSM_1.set('fieldAliases', {'id': 'id', '@id': '@id', 'highway': 'highway', 'name': 'name', 'bicycle': 'bicycle', 'lanes': 'lanes', 'oneway': 'oneway', 'bridge': 'bridge', 'layer': 'layer', 'created_by': 'created_by', 'segregated': 'segregated', 'cycleway': 'cycleway', 'horse': 'horse', 'motor_vehicle': 'motor_vehicle', 'surface': 'surface', 'lit': 'lit', 'foot': 'foot', 'alt_name': 'alt_name', 'crossing': 'crossing', 'source': 'source', 'wikidata': 'wikidata', 'fixme': 'fixme', 'designation': 'designation', 'access': 'access', 'sidewalk': 'sidewalk', 'tunnel': 'tunnel', 'footway': 'footway', 'mapillary': 'mapillary', 'crossing_ref': 'crossing_ref', 'note': 'note', 'traffic_signals:sound': 'traffic_signals:sound', 'wheelchair': 'wheelchair', 'old_name': 'old_name', 'smoothness': 'smoothness', 'note:es': 'note:es', 'covered': 'covered', });
lyr_AytoZgz_0.set('fieldImages', {'TIPO_CARRIL': 'TextEdit', });
lyr_OSM_1.set('fieldImages', {'id': 'TextEdit', '@id': 'TextEdit', 'highway': 'TextEdit', 'name': 'TextEdit', 'bicycle': 'TextEdit', 'lanes': 'TextEdit', 'oneway': 'TextEdit', 'bridge': 'TextEdit', 'layer': 'TextEdit', 'created_by': 'TextEdit', 'segregated': 'TextEdit', 'cycleway': 'TextEdit', 'horse': 'TextEdit', 'motor_vehicle': 'TextEdit', 'surface': 'TextEdit', 'lit': 'TextEdit', 'foot': 'TextEdit', 'alt_name': 'TextEdit', 'crossing': 'TextEdit', 'source': 'TextEdit', 'wikidata': 'TextEdit', 'fixme': 'TextEdit', 'designation': 'TextEdit', 'access': 'TextEdit', 'sidewalk': 'TextEdit', 'tunnel': 'TextEdit', 'footway': 'TextEdit', 'mapillary': 'TextEdit', 'crossing_ref': 'TextEdit', 'note': 'TextEdit', 'traffic_signals:sound': 'TextEdit', 'wheelchair': 'TextEdit', 'old_name': 'TextEdit', 'smoothness': 'TextEdit', 'note:es': 'TextEdit', 'covered': 'TextEdit', });
lyr_AytoZgz_0.set('fieldLabels', {'TIPO_CARRIL': 'no label', });
lyr_OSM_1.set('fieldLabels', {'id': 'no label', '@id': 'no label', 'highway': 'no label', 'name': 'no label', 'bicycle': 'no label', 'lanes': 'no label', 'oneway': 'no label', 'bridge': 'no label', 'layer': 'no label', 'created_by': 'no label', 'segregated': 'no label', 'cycleway': 'no label', 'horse': 'no label', 'motor_vehicle': 'no label', 'surface': 'no label', 'lit': 'no label', 'foot': 'no label', 'alt_name': 'no label', 'crossing': 'no label', 'source': 'no label', 'wikidata': 'no label', 'fixme': 'no label', 'designation': 'no label', 'access': 'no label', 'sidewalk': 'no label', 'tunnel': 'no label', 'footway': 'no label', 'mapillary': 'no label', 'crossing_ref': 'no label', 'note': 'no label', 'traffic_signals:sound': 'no label', 'wheelchair': 'no label', 'old_name': 'no label', 'smoothness': 'no label', 'note:es': 'no label', 'covered': 'no label', });
lyr_OSM_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
    lyr_OSM_1.on("postcompose", update);

    var listenerKey = lyr_OSM_1.on('change', function(e) {
        update();
        ol.Observable.unByKey(listenerKey);
    });