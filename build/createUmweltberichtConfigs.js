// invoke in bash using this command line: 
// node node_modules/casperjs/bin/casperjs.js build/createUmweltberichtConfigs.js --id=0102
/* 
    global Highcharts
*/

var charts = [];
var casper = require('casper').create();
var utils = require("utils");
var urltotal = 'http://ub.basleratlas.ch/?format=chart_export2indikatorenportal&i=0101'; 
var urlbase = 'http://ub.basleratlas.ch/?format=chart_export2indikatorenportal&i=';
var idText = padLeft(casper.cli.options['id'], 4);
var url = urlbase + idText;
var fs = require('fs');

//https://stackoverflow.com/a/5367656
function padLeft(nr, n, str){
    return Array(n-String(nr).length+1).join(str||'0')+nr;
}


function getCharts() {
    var charts = Highcharts.charts;
    return charts;
}

//casper.start('https://statabs.github.io/indikatoren/chart.html?id=5109', function() {
//casper.start('http://ub.basleratlas.ch/?format=chart_export2indikatorenportal&i=0101', function() {
casper.start(url, function() {
   // Wait for the page to be loaded
   this.waitForSelector('svg');
});

casper.then(function() {
    charts = this.evaluate(getCharts);
});

/*
casper.then(function() {
    utils.dump(casper.cli.args);
});
*/

casper.run(function() {
    var content = JSON.stringify(charts[0].options, null,'\t');
    var path = 'charts/configs/umweltbericht/' + idText + '.json';
    fs.write(path, content, 'w');
    //this.echo(content).exit();
    //this.echo(url);
    this.exit();
});
