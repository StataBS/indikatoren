var fs = require('fs');
var pathBase = "charts/templates/";

fs.readdirSync(pathBase).forEach(file => {
    try{
        console.log('checking file ' + file + '...');
        var configFileContents = fs.readFileSync(pathBase + file, 'utf8');
        var config = eval(configFileContents);
        //check if legend.y is defined
        if (config["legend"] && config["legend"]["y"]){
            //only change file if only one occurence of 'y:' is found
            var count = (configFileContents.match(/y:/g) || []).length;
            //make sure we don't replace point.y and other cases
            var pointYCount = (configFileContents.match(/point.y:/g) || []).length;
            if (count == 1 && pointYCount == 0){
                console.log('only 1 occurence of "y:" found, commenting out...');
                var changedFile = configFileContents.replace(/y:/g, "//y:").replace(/"y":/g, "//y:").replace(/'y':/g, "//y:");
                fs.writeFileSync(pathBase + file, changedFile);
            }
            else {
                if (pointYCount > 0){
                    console.log('found point.y, leaving file alone. ');
                }
                if (count > 1){
                    console.log('found more than 1 occurence of "y:", thus leaving file alone. ');
                }
            }
        }
    }
    catch (error){
        console.log(error);
    }
});