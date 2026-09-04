var fs = require("fs");
var eol = require("eol");

var glob = require("glob");

console.log('Adding svg ViewBox for ie...');

var views = ['portal'/*, 'print'*/];
views.forEach(function(view){
    //var files = glob.sync("metadata/single/*.json");
    var files = JSON.parse(fs.readFileSync('tmp/chartsToBuild.json'));
    files.forEach(function(id){
        try{
            if (id != 0000){
                var fileContents = fs.readFileSync('metadata/single/' + id + '.json');
                var indikator = JSON.parse(fileContents);
                if ((indikator.visible == undefined || indikator.visible) && !indikator.kennzahlenset.toLowerCase().includes('print')) {
                    var path = 'images/' + view + '/';
                    var svg = fs.readFileSync(path + indikator.id + '.svg', 'utf8');
                    // Highcharts 12 already emits a correct viewBox matching the actual
                    // rendered size on the root <svg> tag - skip charts that already have
                    // one instead of overwriting it with a hardcoded 485x415, which was
                    // only ever correct for the old fixed chart size and silently
                    // corrupts (crops) any chart exported at a different size.
                    if (/<svg\b[^>]*\bviewBox=/.test(svg)) {
                        console.log('Chart ' + id + ' already has a viewBox, skipping');
                    } else {
                        //replace hardcoded height and width with hardcoded viewBox in order to make pics compatible with IE.
                        var regex = 'width="(\\d+)" height="(\\d+)">';
                        var re = new RegExp (regex);
                        var replace = 'viewBox="0 0 $1 $2">';
                        var svgWithViewBox = svg.replace(re, replace);
                        fs.writeFileSync(path + indikator.id + '.svg', eol.auto(svgWithViewBox));
                        console.log('Added ViewBox for chart ' + id);
                    }
                }
            }
            else {
                console.log('Ignoring ViewBox for chart 0000...!');
            }
        }
        catch(error){
            console.log('Exception in ' + id + ': ' + error);
        }
    });
});

 