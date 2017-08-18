// invoke in bash using this command line: 
// node node_modules/casperjs/bin/casperjs.js build/createUmweltberichtConfigs.js


var casper = require('casper').create();

var system = require('system'); 
var hostname = system.env.C9_HOSTNAME;
var urlbase = 'https://'+ hostname + '/chart.html?hiddenSVG=true&id=';
var fs = require('fs');
var pathBase = "metadata/single/";

// http://phantomjs.org/api/fs/method/list.html
var ubFileList = fs.list(pathBase);
//remove . and .. from list
ubFileList.shift();
ubFileList.shift();

//casper.echo(ubFileList);
casper.options.viewportSize = { width: 485, height: 415 };

// Open dummy web site in order to call start()
casper.start('https://google.ch');

//loop over array of urls: https://stackoverflow.com/a/25601585 
while (ubFileList.length > 0) {
    var id = ubFileList.pop().substr(0,4);
    var idText = padLeft(id, 4);

    (function(id){

        //evaluate json and check if rendering here is necessary
        var currentConfig = require(fs.workingDirectory + "/" + pathBase + id + ".json");
        //define which charts need to be rendered here
        if (
            (   currentConfig.template.indexOf("mappie") > -1 || 
                id == 5902 || 
                id == 5910
            ) 
        && currentConfig.visible) {
            var url = urlbase + currentConfig.id; 
            //close current page to release memory, https://stackoverflow.com/a/18156020
            casper.then(function() {
                casper.echo('Closing page to free RAM...');
                casper.page.close();
                casper.page = require('webpage').create();
            });
            
        
            
            casper.thenOpen(url, function() {
                casper.echo('Opening chart '+ id + ' located at ' + url);
                // Wait for the page to be loaded, i.e. svg node is present
                //this.waitForSelector('svg');
                this.waitForSelector('#renderDone', function(){
                    var content = this.getHTML('#chartSVG', false);
                    
                    var path = 'images/indikatorenset/' + id + '.svg';
                    casper.echo('Saving contents to ' + path + '...');
                    fs.write(path, content, 'w');
                    path = 'images/portal/' + id + '.svg';
                    casper.echo('Saving contents to ' + path + '...');
                    fs.write(path, content, 'w');

                    //casper.capture('screenshots/' + id + '.png');
                });
            });
        }
        else {
            //casper.echo('Chart ' + id + ' is either not visible (visible: ' + currentConfig["visible"] + '), or belongs to kennzahlenset ' + currentConfig.kennzahlenset +', which is not "Umwelt", thus ignoring here. ');
        }
    })(idText);
}        


//https://stackoverflow.com/a/5367656
function padLeft(nr, n, str){
    return Array(n-String(nr).length+1).join(str||'0')+nr;
}


casper.run(function() {
    this.exit();
});

