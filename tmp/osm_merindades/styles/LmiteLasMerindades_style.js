
                    var styleCache_LmiteLasMerindades={}
                    var style_LmiteLasMerindades = function(feature, resolution){
                        var value = ""
                        var style = [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(255,0,0,1.0)", lineDash: null, width: 3})
                        })
                        ,new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0})
                        })
                        ];
                        var labelText = "";
                        var key = value + "_" + labelText

                        if (!styleCache_LmiteLasMerindades[key]){
                            var text = new ol.style.Text({
                                  font: '11.7px Calibri,sans-serif',
                                  text: labelText,
                                  textBaseline: "center",
                                  textAlign: "left",
                                  offsetX: 5,
                                  offsetY: 3,
                                  fill: new ol.style.Fill({
                                    color: "rgba(0, 0, 0, 255)"
                                  }),
                                });
                            styleCache_LmiteLasMerindades[key] = new ol.style.Style({"text": text})
                        }
                        var allStyles = [styleCache_LmiteLasMerindades[key]];
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };