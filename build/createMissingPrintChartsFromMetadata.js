var fs = require("fs");
var glob = require("glob");

console.log('Searching for metadata in a print kennzahlenset with no matching tsv and/or chart definition, then copying their parent data and chart...');
var files = glob.sync("metadata/single/*.json");
files.forEach(function(filepath){
    var fileContents = fs.readFileSync(filepath);
    
    //strip whitespace from start of file and save file
    var fileContentsStripped = fileContents.slice(fileContents.indexOf('{'));
    fs.writeFileSync(filepath, fileContentsStripped);
    var indikator = JSON.parse(fileContentsStripped);
    
    if ((indikator.visible == undefined || indikator.visible == true) && indikator.kennzahlenset.toLowerCase().includes('print')) {
        console.log(filepath + ' is visible and in a print kennzahlenset, checking for data and chart definition...');
        //parent must be present
        if (indikator.parentId){
          copyFile('data/' + indikator.parentId + '.tsv', 'data/' + indikator.id + '.tsv');
          copyFile('charts/templates/' + indikator.parentId + '.js', 'charts/templates/' + indikator.id + '.js');
        }
    }
    else {
        console.log(filepath + ' NOT visible, ignoring');
    }
});


//if destination file does not exist, copy source from file 
function copyFile(sourceFilePath, destinationFilePath){
  fs.open(destinationFilePath, 'r', (err, fd) => {
    if (err) {
      if (err.code === 'ENOENT') {
        console.error(destinationFilePath + ' does not exist, copying ' + sourceFilePath + '...');
        fs.writeFile(destinationFilePath, fs.readFileSync(sourceFilePath), (error) => {
          console.log('Error copying ' + sourceFilePath + ': ' + error); 
        });
        /*
        fs.copyFile(sourceFilePath, destinationFilePath, (err) => {
           console.log('Error copying ' + sourceFilePath + ': ' + err); 
        } );
        */
      }
    }
  });        
}