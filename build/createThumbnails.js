//https://gist.github.com/TorsteinHonsi/e8a1e6971608523eb8dd
//how to use custom non-node code in from within node.js: http://stackoverflow.com/questions/5171213/load-vanilla-javascript-libraries-into-node-js

/**
 * Sample of serverside generation of Highcharts using an extension to jsdom in node.js.
 *
 * Usage: 
 * npm install jsdom
 * npm install highcharts@4.2.6
 * npm install highcharts-more-node
 * node highcharts-jsdom
 */



//Hack to re-use existing web js code from within node.js, see http://stackoverflow.com/a/8808162
var execfile = require("execfile");

console.log('Loading metadata...');

var ctx = execfile('data/indikatoren.js');
var indikatoren = ctx.indikatoren;

indikatoren.forEach(function(indikator){
    console.log('Rendering svg for chart ' + indikator.kuerzel + '...');
    renderToFile(indikator.kuerzel, console);
});

console.log('...done!');

/*
var kuerzel = 'I.01.1.0040';
renderToFile(kuerzel);
*/
function renderToFile(kuerzel, console){
    /* eslint-env node */
    /* eslint no-console: 0 */
    var jsdom = require('jsdom'),
        fs = require('fs');


    // Get the document and window
    var doc = jsdom.jsdom('<!doctype html><html><body><div id="container-' + kuerzel + '"></div></body></html>', { virtualConsole }),
        win = doc.defaultView;


    var virtualConsole = jsdom.createVirtualConsole().sendTo(console);


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


    


    // Require Highcharts with the window shim
    var Highcharts = require('highcharts')(win);
    //Error bars need highcharts-more. How to import: http://stackoverflow.com/q/34505816
    require('highcharts/highcharts-more')(Highcharts);
    //var Highcharts_more = require('Highcharts/highcharts-more')(win);
    var Highcharts_data = require('highcharts/modules/data')(Highcharts);
    

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





    for (var i=0; i<indikatoren.length; i++){
        if (indikatoren[i].kuerzel === kuerzel){
            var chartMetaData = indikatoren[i];
            break;
        }
    };


    var csv = (fs.readFileSync('data/' + kuerzel + '.csv', 'utf8'));

    var ctx = execfile('charts/' + kuerzel + '.js', {Highcharts: Highcharts, chartOptions: {}});
    var options = ctx.chartOptions[kuerzel];

    //disable animations and prevent exceptions
    options.chart = (options.chart || {});
    options.chart.forExport = true;

    var templateName = chartMetaData.template;
    var ctx = execfile('charts/' + templateName + '.js', {Highcharts: Highcharts});
    var template = ctx.template;


    var ctx = execfile("assets/js/indikatoren-highcharts.js", { 
        Highcharts: Highcharts, 
        console: console, 
        template: template,
        indikatorensetView: false, 
        chartData: chartMetaData
    });
    ctx.drawChart(csv, options);

    var svg = win.document.getElementById('container-' + kuerzel).childNodes[0].innerHTML;

    //replace hardcoded height and width with hardcoded viewBox in order to make pics compatible with IE. 
    var regex = 'width="(.*?)" height="(.*?)">';
    var re = new RegExp (regex);
    var replace = 'viewBox="0 0 $1 $2">';
    var svgWithViewBox = svg.replace(re, replace);


    fs.writeFile('images/' + kuerzel + '.svg', svgWithViewBox);
    return svgWithViewBox;
};