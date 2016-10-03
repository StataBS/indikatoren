//https://gist.github.com/TorsteinHonsi/e8a1e6971608523eb8dd
//how to use custom non-node code in from within node.js: http://stackoverflow.com/questions/5171213/load-vanilla-javascript-libraries-into-node-js

/**
 * Sample of serverside generation of Highcharts using an extension to jsdom in node.js.
 *
 * Usage: 
 * npm install jsdom
 * npm install highcharts@4.2.6
 * node highcharts-jsdom
 */

/* eslint-env node */
/* eslint no-console: 0 */
var jsdom = require('jsdom'),
    fs = require('fs');


var virtualConsole = jsdom.createVirtualConsole().sendTo(console);

// Get the document and window
var doc = jsdom.jsdom('<!doctype html><html><body><div id="container-I.01.1.0023"></div></body></html>', { virtualConsole }),
    win = doc.defaultView;

// Do some modifications to the jsdom document in order to get the SVG bounding
// boxes right.
doc.createElementNS = function (ns, tagName) {
    var elem = doc.createElement(tagName);

    // Set private namespace to satisfy jsdom's getter
    elem._namespaceURI = ns; // eslint-disable-line no-underscore-dangle
    /**
     * Pass Highcharts' test for SVG capabilities
     * @returns {undefined}
     */
    elem.createSVGRect = function () {};
    /**
     * jsdom doesn't compute layout (see https://github.com/tmpvar/jsdom/issues/135).
     * This getBBox implementation provides just enough information to get Highcharts
     * to render text boxes correctly, and is not intended to work like a general
     * getBBox implementation. The height of the boxes are computed from the sum of
     * tspans and their font sizes. The width is based on an average width for each glyph.
     * It could easily be improved to take font-weight into account.
     * For a more exact result we could to create a map over glyph widths for several
     * fonts and sizes, but it may not be necessary for the purpose.
     * @returns {Object} The bounding box
     */
    elem.getBBox = function () {
        var lineWidth = 0,
            width = 0,
            height = 0;

        [].forEach.call(elem.children.length ? elem.children : [elem], function (child) {
            var fontSize = child.style.fontSize || elem.style.fontSize,
                lineHeight,
                textLength;

            // The font size and lineHeight is based on empirical values, copied from
            // the SVGRenderer.fontMetrics function in Highcharts.
            if (/px/.test(fontSize)) {
                fontSize = parseInt(fontSize, 10);
            } else {
                fontSize = /em/.test(fontSize) ? parseFloat(fontSize) * 12 : 12;
            }
            lineHeight = fontSize < 24 ? fontSize + 3 : Math.round(fontSize * 1.2);
            textLength = child.textContent.length * fontSize * 0.55;

            // Tspans on the same line
            if (child.getAttribute('dx') !== '0') {
                height += lineHeight;
            }

            // New line
            if (child.getAttribute('dy') !== null) {
                lineWidth = 0;
            }

            lineWidth += textLength;
            width = Math.max(width, lineWidth);

        });

        return {
            x: 0,
            y: 0,
            width: width,
            height: height
        };
    };
    return elem;
};


//eval(require('fs').readFileSync('../assets/js/indikatoren-highcharts.js', 'utf8'));


//load chart config from file system: Does not perfectly work, functions are not included (e.g. only label last data point). 
//better: merge csv, template, option link in the web app
//eval(fs.readFileSync('build/I.01.1.0023.js', 'utf8'));

//disable animations and prevent exceptions 
//

// Require Highcharts with the window shim
var Highcharts = require('highcharts')(win);
var Highcharts_data = require('highcharts/modules/data')(Highcharts);

var csv = (fs.readFileSync('data/I.01.1.0023.csv', 'utf8'));
console.log(csv);



// Disable all animation
Highcharts.setOptions({
    plotOptions: {
        series: {
            animation: false,
            dataLabels: {
                defer: false
            }
        }
    },
    lang: {
		decimalPoint: ",",
        thousandsSep: " "
    }  
});


//Hack to re-use existing web js code from within node.js, see http://stackoverflow.com/a/8808162
var execfile = require("execfile");


var ctx2 = execfile('charts/I.01.1.0023.js', {Highcharts: Highcharts, chartOptions: {}});
var options = ctx2.chartOptions['I.01.1.0023'];

options.chart = (options.chart || {});
options.chart.forExport = true;
options.chart.renderTo = 'container';
console.log(options);

var ctx1 = execfile('charts/line001.js')
var template = ctx1.template;

var ctx3 = execfile('data/indikatoren.js');
var indikatoren = ctx3.indikatoren;

for (var i=0; i<indikatoren.length; i++){
    if (indikatoren[i].kuerzel === 'I.01.1.0023'){
        var chartMetaData = indikatoren[i];
        break;
    }
};

var ctx = execfile("assets/js/indikatoren-highcharts.js", { 
    Highcharts: Highcharts, 
    console: console, 
    template: template,
    indikatorensetView: false, 
    chartData: chartMetaData
 });
console.log(ctx.escapeCssChars('Test'));
ctx.drawChart(csv, options);

//console.log(Highcharts.charts[0]);
  


// Generate the chart into the container
//Highcharts.chart('container', options);

var svg = win.document.getElementById('container-I.01.1.0023').childNodes[0].innerHTML;
fs.writeFile('build/I.01.1.0023.svg', svg, function () {
    console.log('Wrote ' + svg.length + ' bytes to ' + __dirname + '/I.01.1.0023.svg'); // eslint-disable-line no-path-concat
});
