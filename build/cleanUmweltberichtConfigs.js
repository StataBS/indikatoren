/* 
    global Highcharts
*/

var charts = [];
var fs = require('fs');
var pathBase = "metadata/single/";

var serialize = require('serialize-javascript');


/*
// http://phantomjs.org/api/fs/method/list.html
var ubFileList = fs.list(pathBase);
//remove . and .. from list
ubFileList.shift();
ubFileList.shift();
*/


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
        
        var stringifiedOptions = serialize(config, {space: 2});
        fs.writeFileSync(path, stringifiedOptions);
    }
    catch (error){
        //silently ignore errors
        //console.log(error);
    }
});


var ubFileList=[];
//loop over array of urls: https://stackoverflow.com/a/25601585 
while (ubFileList.length > 0) {
    var id = ubFileList.pop().substr(0,4);
    var idText = padLeft(id, 4);

    (function(id){

        //evaluate json and check if indicator belongs to kennzahlenset Umwelt
        var currentConfig = require(fs.workingDirectory + "/" + pathBase + id + ".json");
        if (currentConfig.kennzahlenset == "Umwelt" && currentConfig.visible) {
            var path = 'charts/configs/portal/' + id + '.json';
            var config = fs.readFileSync(path, 'utf8');
            console.log(config);
        }
        else {
            console.log('Chart ' + id + ' is either not visible (visible: ' + currentConfig["visible"] + '), or belongs to kennzahlenset ' + currentConfig.kennzahlenset +', which is not "Umwelt", thus ignoring here. ');
        }
    })(idText);
}        


//https://stackoverflow.com/a/5367656
function padLeft(nr, n, str){
    return Array(n-String(nr).length+1).join(str||'0')+nr;
}

//https://github.com/yahoo/serialize-javascript
function deserialize(serializedJavascript){
  return eval('(' + serializedJavascript + ')');
}