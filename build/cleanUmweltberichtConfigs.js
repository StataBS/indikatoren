var fs = require('fs');
var glob = require("glob");
var metadataPathBase = "metadata/single/";
var configPathBase = "charts/configs/portal/";
var templatePathBase = "charts/templates/";
var serialize = require('serialize-javascript');
var clone = require('clone');

var files = glob.sync(metadataPathBase + "*.json");
files.forEach(function(filepath){
    var metadataFileContents = fs.readFileSync(filepath, 'utf8');
    var indikator = JSON.parse(metadataFileContents);
    if (indikator.kennzahlenset == 'Umwelt' && indikator.id == 4221){
        //try{
            var configFileContents = fs.readFileSync(configPathBase + indikator.id + '.json', 'utf8');
            var config = deserialize(configFileContents);

            if (!indikator.datenInChartIntegriert){
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
                
                //replace template in metadata and save
                indikator.template = 'empty';
                var stringifiedMetadata = JSON.stringify(indikator, undefined, 2);
                fs.writeFileSync(metadataPathBase + indikator.id + '.json', stringifiedMetadata);
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
         /*   
        }
        catch (error){
            //silently ignore errors
            console.log(error);
        }
        */

    }
});


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

*/

//https://github.com/yahoo/serialize-javascript
function deserialize(serializedJavascript){
  return eval('(' + serializedJavascript + ')');
}