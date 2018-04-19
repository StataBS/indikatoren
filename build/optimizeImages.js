var fs = require("fs");
var SVGO = require('svgo');
var svgo = new SVGO({});
var filePaths = [];

var views = ['portal'/*, 'print'*/];
views.forEach(function(view){
    console.log('Starting optimizing svg files for indikatorensetView=' + view);
    var files = JSON.parse(fs.readFileSync('tmp/chartsToBuild.json'));
    files.forEach(function(id){        
       filePaths.push('images/' + view + '/' + id + '.svg'); 
    });
});
//console.log(filePaths);


filePaths.forEach(filePath => {
    //var filePath = 'images/portal/5125.svg';
    
    
    fs.readFile(filePath, 'utf8', function(err, data) {
        if (err) {
            console.log('Exception reading ' + filePath);
            return;
            //throw err;
        }
    
        svgo = new SVGO({
            full    : true,
            plugins : 
                [
                    'cleanupIDs'
                ],
            js2svg  : { pretty: true, indent: 2 }
        });
    
        svgo.optimize(data, function(result) {
            fs.writeFile(filePath, result.data, (err) => {
              if (err) throw err;
              console.log('Optimized file ' + filePath + '...');
            });
        });
    
    });
});


/*
//working with promises: see https://stackoverflow.com/questions/31413749/node-js-promise-all-and-foreach

var actions = filePaths.map(function(filePath){
    var svg = fs.readFileSync(filePath, 'utf8');
    return svgo.optimize(svg);
});

var results = Promise.all(actions);

results.then(svg => {
         fs.writeFileSync(path + indikator.id + '.svg', svgWithViewBox);
    }
);
*/