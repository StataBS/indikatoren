var fs = require("fs");


var glob = require("glob");

console.log('Adding svg ViewBox for ie...');
addSvgViewBox(console);


function addSvgViewBox(console){
    var views = ['indikatorenset', 'portal'/*, 'print'*/];
    //var views = [true, false];
    views.forEach(function(view){
        var files = glob.sync("metadata/single/*.json");
        files.forEach(function(filepath){
            var fileContents = fs.readFileSync(filepath);
            var indikator = JSON.parse(fileContents);
            //for the moment we exclude charts of type mappie todo: fix svg creation of mappie
            //var mappie = (fileContents.indexOf('mappie') > 0);
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
}
 