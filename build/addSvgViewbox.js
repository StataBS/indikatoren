var fs = require("fs");

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
                if (indikator.visible == undefined || indikator.visible) {                  
                    var path = 'images/' + view + '/';
                    var svg = fs.readFileSync(path + indikator.id + '.svg', 'utf8');
                    //replace hardcoded height and width with hardcoded viewBox in order to make pics compatible with IE. 
                    var regex = 'width="(.*?)" height="(.*?)">';
                    var re = new RegExp (regex);
                    //hard-code viewbox to make sure all images have the same dimensions so that the grid looks good in Firefox, too
                    //var replace = 'viewBox="0 0 $1 $2">';
                    var replace = 'viewBox="0 0 485 415">';
                    var svgWithViewBox = svg.replace(re, replace);            
                    fs.writeFileSync(path + indikator.id + '.svg', svgWithViewBox);
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

 