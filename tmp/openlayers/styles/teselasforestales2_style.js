var size = 0;

var styleCache_teselasforestales2={}
var style_teselasforestales2 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = ""
    var size = 0;
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,166,1,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(200,55,98,0.0)'})
    })];
    if ("" !== null) {
        var labelText = String("");
    } else {
        var labelText = ""
    }
    var key = value + "_" + labelText

    if (!styleCache_teselasforestales2[key]){
        var text = new ol.style.Text({
              font: '14.3px \'Ubuntu\', sans-serif',
              text: labelText,
              textBaseline: "center",
              textAlign: "left",
              offsetX: 5,
              offsetY: 3,
              fill: new ol.style.Fill({
                color: 'rgba(0, 0, 0, 255)'
              }),
            });
        styleCache_teselasforestales2[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_teselasforestales2[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};