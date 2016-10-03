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

// Get the document and window
var doc = jsdom.jsdom('<!doctype html><html><body><div id="container"></div></body></html>'),
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


eval(require('fs').readFileSync('../assets/js/indikatoren-highcharts.js', 'utf8'));


//load chart config from file system: Does not perfectly work, functions are not included (e.g. only label last data point). 
//better: merge csv, template, option link in the web app
eval(require('fs').readFileSync('./I.01.1.0025.js', 'utf8'));

//disable animations and prevent exceptions 
options.chart.forExport = true;

this.testFn = function(){return 'foo'};
console.log(testFun());

// Require Highcharts with the window shim
var Highcharts = require('highcharts')(win);

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

// Generate the chart into the container
Highcharts.chart('container', options);

var svg = win.document.getElementById('container').childNodes[0].innerHTML;
fs.writeFile('chart.svg', svg, function () {
    console.log('Wrote ' + svg.length + ' bytes to ' + __dirname + '/chart.svg'); // eslint-disable-line no-path-concat
});