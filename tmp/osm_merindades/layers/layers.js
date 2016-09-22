var baseLayer = new ol.layer.Group({'title': 'Base maps',layers: [
new ol.layer.Tile({
    title: 'Thunderforest Outdoors',
    source: new ol.source.XYZ({
        url: 'http://tile.thunderforest.com/outdoors/{z}/{x}/{y}.png'
    })
})]});
var lyr_ImgenesPNOA = new ol.layer.Tile({
                        source: new ol.source.TileWMS(({
                          url: "http://www.idee.es/wms/PNOA/PNOA?",
                          params: {"LAYERS": "PNOA", "TILED": "true"},
                        })),
                        title: "Imágenes PNOA"
                      });var lyr_MapasrasterIGN = new ol.layer.Tile({
                        source: new ol.source.TileWMS(({
                          url: "http://www.ign.es/wms-inspire/mapa-raster?",
                          params: {"LAYERS": "mtn_rasterizado", "TILED": "true"},
                        })),
                        title: "Mapas raster (IGN)"
                      });var format_LmiteLasMerindades = new ol.format.GeoJSON();
var features_LmiteLasMerindades = format_LmiteLasMerindades.readFeatures(geojson_LmiteLasMerindades);
var jsonSource_LmiteLasMerindades = new ol.source.Vector();
jsonSource_LmiteLasMerindades.addFeatures(features_LmiteLasMerindades);
var lyr_LmiteLasMerindades = new ol.layer.Vector({
                source: jsonSource_LmiteLasMerindades, 
                style: style_LmiteLasMerindades,
                title: "Límite Las Merindades"
            });

lyr_ImgenesPNOA.setVisible(false);lyr_MapasrasterIGN.setVisible(false);lyr_LmiteLasMerindades.setVisible(true);
var layersList = [baseLayer,lyr_ImgenesPNOA,lyr_MapasrasterIGN,lyr_LmiteLasMerindades];
