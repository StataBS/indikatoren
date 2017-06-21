// invoke in bash using this command line: 
// node node_modules/casperjs/bin/casperjs.js build/createUmweltberichtConfigs.js
/* 
    global Highcharts
*/

var charts = [];
var casper = require('casper').create();
var urlbase = 'http://ub.basleratlas.ch/?format=chart_export2indikatorenportal&i=';
var fs = require('fs');
var path = "metadata/umweltbericht/";

// http://phantomjs.org/api/fs/method/list.html
var ubFileList = fs.list(path);
//remove . and .. from list
ubFileList.shift();
ubFileList.shift();

// Open dummy web site in order to call start()
casper.start('https://google/ch');

//loop over array of urls: https://stackoverflow.com/a/25601585 
while (ubFileList.length > 0) {
    var id = ubFileList.pop().substr(0,4);
    var idText = padLeft(id, 4);
    var url = urlbase + idText;

    (function(id){
        casper.thenOpen(url, function() {
            casper.echo('Opening UB chart '+ idText + ' located at ' + url + '...');
            // Wait for the page to be loaded, i.e. svg node is present
            this.waitForSelector('svg');
            
        });
        casper.then(function(){
            //get Highcharts.charts array
            charts = this.evaluate(getCharts);
            //save options of first chart into file
            var content = JSON.stringify(charts[0].options, null,'\t');
            var path = 'charts/configs/umweltbericht/' + id + '.json';
            casper.echo('Saving contents to ' + path + '...');
            fs.write(path, content, 'w');
        });
    })(idText);
}        


//https://stackoverflow.com/a/5367656
function padLeft(nr, n, str){
    return Array(n-String(nr).length+1).join(str||'0')+nr;
}


function getCharts() {
    var charts = Highcharts.charts;
    return charts;
}


casper.run(function() {
    this.exit();
});
