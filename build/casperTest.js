//get indikatoren from web page, then open each chart and get the chart's options object 
//how to implement each in casper.js: http://docs.casperjs.org/en/latest/modules/casper.html#each
//with each options object, call highchart's svg creation module that uses phantom.js. Thus call casper from within a phantom script: http://docs.casperjs.org/en/latest/faq.html#can-i-use-casperjs-without-using-the-casperjs-executable

var casper = require('casper').create();
var options;
var optionsJson;
var indikatoren;
var indikatorenJson;

var casper = require('casper').create();

casper.start('http://localhost:8000/chart.html?kuerzel=I.01.1.0013');

casper.then(function(){
    indikatoren = this.evaluate(function(){return indikatoren;});
    indikatorenJson = JSON.stringify(indikatoren);
});

casper.then(function () {
    options = this.evaluate(function(){return Highcharts.charts[0].options;});
    optionsJson = JSON.stringify(options);     
    //console.log(optionsJson);
});

casper.run(function () {
    console.log(optionsJson);
    console.log(indikatorenJson);
    casper.done();
});


