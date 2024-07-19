// invoke in bash using this command line: 
// node node_modules/casperjs/bin/casperjs.js build/createUmweltberichtConfigs.js

var serialize = require('serialize-javascript');

//#proxy not necessary any more , AD-credentials used now. /BL20200924
//var envVars = require('system').env;
//var proxyBS = envVars.http_proxy;

//var casper = require('casper').create();
var casper = require('casper').create({
    //verbose: true,
    //logLevel: "debug",
    /*pageSettings: {
        proxy: proxyBS 
     }*/
});


//var urlbase = 'http://ub.basleratlas.ch/?format=chart_export2indikatorenportal&i=';
var urlbase = 'http://ub.basleratlas.ch/?format=stata&k=bs&i=';
var fs = require('fs');
 
var pathBase = "metadata/single/";

// http://phantomjs.org/api/fs/method/list.html
var ubFileList = fs.list(pathBase);
//remove . and .. from list
ubFileList.shift();
ubFileList.shift();

//casper.echo(ubFileList);
casper.options.viewportSize = { width: 485, height: 415 };

//todo: remove once visible has been set correctly for all charts in kennzahlenset Umwelt
/*
casper.options.onWaitTimeout = function(){
    casper.echo('Wait timeout exceeded, continuing operations...');
};
*/

casper.echo("Starting to loop through all IDs to find UB-IDs...");

// Open dummy web site in order to call start()
casper.start('https://google.ch');

//loop over array of urls: https://stackoverflow.com/a/25601585 
while (ubFileList.length > 0) {
    var id = ubFileList.pop().replace('.json','');//.substr(0,4);
    var idText = padLeft(id, 4);

    (function(id){

        //evaluate json and check if indicator belongs to kennzahlenset Umwelt
        var currentConfig = require(fs.workingDirectory + "/" + pathBase + id + ".json");
        if (currentConfig.kennzahlenset == "Umwelt" && currentConfig.visible) {
            
            var url = urlbase + currentConfig.kuerzelKunde; 
            //close current page to release memory, https://stackoverflow.com/a/18156020
            casper.then(function() {
                //casper.echo('Closing page to free RAM...');
                casper.page.close();
                casper.page = require('webpage').create();
            });
            
        
            casper.thenOpen(url, function() {
                //casper.echo(id+ ': Opening URL ' + url);
                // Wait for the page to be loaded, i.e. svg node is present
                //this.waitForSelector('svg');
                this.waitForSelector('#serialized_highcharts', function _then(){
                    //get Highcharts.charts array
                    //charts = this.evaluate(getCharts);
                    //save options of first chart into file
                    //var content = serialize(charts[0].options, {space: 2});
                    var jsContent = casper.fetchText('#serialized_highcharts');
                    
                    var path = 'charts/configs/portal/' + id + '.json';
                    fs.write(path, jsContent, 'w');
                    //casper.echo(id+ ': Wrote JSON ' + path + '...');

                    var tsvPath = '-------------';
                    //get tsv from umweltbericht if necessary
/*
                    28.9.2020/BL: if wurde auskommentiert weil mutter-indikatoren aus portal tw. (z.B. Energie) nicht 
                    die gleiche TSV-Struktur aufweisen wie die UB-Indikatoren. Die TSVs müssen identisch sein, damit die übernahme der
                    Daten funktioniert...
*/
                    //if (currentConfig.datenInChartIntegriert || currentConfig.datenInChartIntegriert === undefined){
                        var tsvContent = casper.fetchText('#data-tsv');                        
                        tsvPath = 'data/' + id + '.tsv';
                        fs.write(tsvPath, tsvContent, 'w');
                        //casper.echo(id+ ': Wrote tsv ' + tsvPath + '...');
                    //}

                    casper.echo(id + ' done: ' + path + ' ' + tsvPath + ' ' + url);
                    //casper.capture('screenshots/' + id + '.png');
                }, function _onTimeout(){
                    casper.echo('-------------------------------------------------------');
                    casper.echo('ERROR for ID '+ id + ': URL not found: ' +url, "WARNING");
                    casper.echo('-------------------------------------------------------');
                });
            });
            /*
            casper.then(function(){
                this.wait(500, function() {
                    this.echo("I've waited...");
                });
            });
            
            */
            
            /*
            casper.then(function(){
                //get Highcharts.charts array
                charts = this.evaluate(getCharts);
                //save options of first chart into file
                //var content = JSON.stringify(charts[0].options, null,'\t');
                //var content = serialize(charts[0].options, {space: 2});
                
                var content = document.querySelector('#serialized_highcharts').innerText;
                var path = 'charts/configs/umweltbericht/' + id + '.json';
                casper.echo('Saving contents to ' + path + '...');
                fs.write(path, content, 'w');
                casper.capture('screenshots/' + id + '.png');
            });
            */
        }
        else {
           //casper.echo('Chart ' + id + ' is either not visible (visible: ' + currentConfig["visible"] + '), or belongs to kennzahlenset ' + currentConfig.kennzahlenset +', which is not "Umwelt", thus ignoring here. ');
           //casper.echo(id + ' ignored');
        }
        
    })(idText);
}

//https://stackoverflow.com/a/5367656
function padLeft(nr, n, str){
    return Array(n-String(nr).length+1).join(str||'0')+nr;
}


function getCharts() {
    return window.Highcharts.charts;
}


//from https://github.com/yahoo/serialize-javascript
function deserialize(serializedJavascript){
  return eval('(' + serializedJavascript + ')');
}


casper.run(function() {
    this.exit();
    this.echo('Finished!');
});



