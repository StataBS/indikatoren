var fs = require('fs');
var glob = require("glob");
var metadataPathBase = "metadata/single/";
var configPathBase = "charts/configs/portal/";
var templatePathBase = "charts/templates/";
var dataPathBase = "data/";
var serialize = require('serialize-javascript');
var clone = require('clone');
var crlf = require('crlf');

var files = glob.sync(metadataPathBase + "*.json");
files.forEach(function(filepath){
    var metadataFileContents = fs.readFileSync(filepath, 'utf8');
    
    //strip whitespace from start of file and save file
    //replace 'nice' quotes with technical quotes - 'nice' quotes are usually created when pasting content from word, link hrefs do not work with those quotes
    var metadataFileContentsStripped = metadataFileContents.slice(metadataFileContents.indexOf('{')).replace(/’/g, "'").toString();
    fs.writeFileSync(filepath, metadataFileContentsStripped);
    console.log('Saving: ' + filepath);
    crlf.set(filepath, 'CRLF', function(err, endingType) {
        console.log('Setting CRLF for: ' + filepath);
    });

    var indikator = JSON.parse(metadataFileContentsStripped);
    if (indikator.kennzahlenset == 'Umwelt' /*&& indikator.id == 4221*/){
        try{
            var configFileContents = fs.readFileSync(configPathBase + indikator.id + '.json', 'utf8');
            var config = deserialize(configFileContents);
            //if property datenInChartIntegriert is defined and st to false

/* 28.9.2020/BL: auskommentiert weil mutter-indikatoren aus portal tw. (z.B. Energie) nicht 
die gleiche TSV-Struktur aufweisen wie die UB-Indikatoren. Die TSVs müssen identisch sein, damit die übernahme der
Daten funktioniert...


            if (indikator.datenInChartIntegriert != undefined && !indikator.datenInChartIntegriert){
                //clone object, see https://stackoverflow.com/a/44299805
                let configForJs = clone(config);
                //remove series.data series.name from each series in the config so that tsv is used instead
                configForJs.series.forEach((v, i, arr) =>{
                    delete v.data;
                    delete v.name;
                });
                //fix xAxis for categorical charts
                if (configForJs.xAxis.categories){
                    delete configForJs.xAxis.categories;  
                    delete configForJs.xAxis.floor;
                    delete configForJs.xAxis.ceiling;
                    //configForJs.xAxis.type = 'category';
                }
                
                
                //wrap chart config in self-evaluating function and save as js file
                var stringifiedChart = serialize(configForJs, {space: 2});
                stringifiedChart = '(function(){return ' + stringifiedChart + ';}());';
                fs.writeFileSync(templatePathBase + indikator.id + '.js', stringifiedChart);
                console.log('Saving: ' + templatePathBase + indikator.id + '.js')
                crlf.set(templatePathBase + indikator.id + '.js', 'CRLF', function(err, endingType) {
                    console.log('Setting CRLF for: ' + templatePathBase + indikator.id + '.js');
                });
                
                //replace template in metadata and save
                indikator.template = 'empty';
                var stringifiedMetadata = JSON.stringify(indikator, undefined, 2);
                fs.writeFileSync(metadataPathBase + indikator.id + '.json', stringifiedMetadata);
                console.log('Saving: ' + metadataPathBase + indikator.id + '.json')
                crlf.set(metadataPathBase + indikator.id + '.json', 'CRLF', function(err, endingType) {
                    console.log('Setting CRLF for: ' + metadataPathBase + indikator.id + '.json');
                });

                //ensure crlf for tsv files
                console.log('Saving: ' + dataPathBase + indikator.id + '.tsv')
                crlf.set(dataPathBase + indikator.id + '.tsv', 'CRLF', function(err, endingType) {
                    console.log('Setting CRLF for: ' + dataPathBase + indikator.id + '.tsv');
                });

            }

            if (indikator.datenInChartIntegriert || indikator.datenInChartIntegriert === undefined)
*/
            {
                //ensure crlf for tsv files
                console.log('Saving: ' + dataPathBase + indikator.id + '.tsv')
                crlf.set(dataPathBase + indikator.id + '.tsv', 'CRLF', function(err, endingType) {
                    console.log('Setting CRLF for: ' + dataPathBase + indikator.id + '.tsv');
                });
            }

            try{
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
            }
            catch (err){
                //silently catch errors here
            }
            
            var stringifiedOptions = serialize(config, {space: 2});
            fs.writeFileSync(configPathBase + indikator.id + '.json', stringifiedOptions);
            console.log('Saving: ' + configPathBase + indikator.id + '.json')
            crlf.set(configPathBase + indikator.id + '.json', 'CRLF', function(err, endingType) {
                console.log('Setting CRLF for: ' + configPathBase + indikator.id + '.json');
            });
    }
        catch (error){
            //silently ignore errors
            //console.log(error);
        }

    }
});

console.log('Finished!');


/*
fs.readdirSync(metadataPathBase).forEach(file => {
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
        fs.writeFileSync(path, eol.auto(stringifiedOptions));
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

*/

//https://github.com/yahoo/serialize-javascript
function deserialize(serializedJavascript){
  return eval('(' + serializedJavascript + ')');
}