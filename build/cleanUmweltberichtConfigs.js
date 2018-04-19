var fs = require('fs');
var pathBase = "metadata/single/";

var serialize = require('serialize-javascript');

fs.readdirSync(pathBase).forEach(file => {
    var id = file.substr(0,4);
    var idText = padLeft(id, 4);
    var path = 'charts/configs/portal/' + idText + '.json';
    try{
        var configFileContents = fs.readFileSync(path, 'utf8');
        var config = deserialize(configFileContents);
        
        //remove export menu buttons and their names from chart config so that indikatoren options can be applied
        delete config.exporting.buttons;
        delete config.lang.printChart;
        delete config.lang.downloadPNG;
        delete config.lang.downloadJPEG;
        delete config.lang.downloadPDF;
        delete config.lang.downloadSVG;
        delete config.lang.contextButtonTitle;
        delete config.lang.downloadCSV;
        delete config.lang.downloadXLS;
        delete config.lang.viewData;
        
        //clear menu item style
        delete config.navigation.menuItemStyle.padding;
        delete config.navigation.menuItemStyle.fontFamily;
        
        var stringifiedOptions = serialize(config, {space: 2});
        fs.writeFileSync(path, stringifiedOptions);
    }
    catch (error){
        //silently ignore errors
        //console.log(error);
    }
});


//https://stackoverflow.com/a/5367656
function padLeft(nr, n, str){
    return Array(n-String(nr).length+1).join(str||'0')+nr;
}

//https://github.com/yahoo/serialize-javascript
function deserialize(serializedJavascript){
  return eval('(' + serializedJavascript + ')');
}