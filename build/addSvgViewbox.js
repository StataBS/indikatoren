var fs = require("fs");

var glob = require("glob");

console.log('Adding svg ViewBox for ie...');

var views = ['indikatorenset', 'portal'/*, 'print'*/];
views.forEach(function(view){
    //var files = glob.sync("metadata/single/*.json");
    var files = JSON.parse(fs.readFileSync('tmp/chartsToBuild.json'));
    files.forEach(function(id){
        var indikator = JSON.parse(fs.readFileSync('metadata/single/' + id + '.json'));
        if (indikator.visible == undefined || indikator.visible) {                  
            var path = 'images/' + view + '/';
            var svg = fs.readFileSync(path + indikator.id + '.svg', 'utf8');
            //replace hardcoded height and width with hardcoded viewBox in order to make pics compatible with IE. 
            var regex = 'width="(.*?)" height="(.*?)">';
            var re = new RegExp (regex);
            var replace = 'viewBox="0 0 $1 $2">';
            var svgWithViewBox = svg.replace(re, replace);            
            fs.writeFileSync(path + indikator.id + '.svg', svgWithViewBox);
        }
    });
});

 