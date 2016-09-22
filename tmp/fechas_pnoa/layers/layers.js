var baseLayer = new ol.layer.Group({'title': 'Base maps',layers: [new ol.layer.Tile({title: 'Thunderforest Outdoors', source: new ol.source.XYZ({url: 'http://tile.thunderforest.com/outdoors/{z}/{x}/{y}.png'})})]});
var lyr_Mosaico = new ol.layer.Tile({
                        source: new ol.source.TileWMS(({
                          url: "http://www.ign.es/wms-inspire/pnoa-ma?",
                          params: {"LAYERS": "OI.MosaicElement", "TILED": "true"},
                        })),
                        title: "Mosaico"
                      });

lyr_Mosaico.setVisible(true);
var layersList = [baseLayer,lyr_Mosaico];
