# Indikatorenportal Statistisches Amt Basel-Stadt 
Find and display statistical indicators from the canton of Basel-Stadt, Switzerland. See live version [here](http://www.statistik.bs.ch/zahlen/indikatoren/).  


##Create png files of each chart within an indikatorenset
- In a terminal window within c9.io, run the following command: 
```javascript
npm run start-export-server
```
- In Chrome, open print.html?Indikatorenset=indikatorensetname 
- Chrome will download a png file of each chart in the given Indikatorenset to the local downloads directory. You can then manually move them to their target folder. 
- To preview single charts in print view, use chart.html with the url parameter "view=print", e.g. chart.html?view=print&id=5824. 
- At the end of the export session, it's best to stop the export server again: 
```javascript
npm run stop-export-server
```

##Manually create svg thumbnails 
- For the portal view: In Chrome, open thumbnails.html
- For the indikatorenset view: In Chrome, open thumbnails.html?view=indikatorenset
This will download all svg files to the local downloads directory. You can then manually move them to their respective directory below /images/.


## Local Installation
Install [node.js](https://nodejs.org), then run the following command in the console: 
```javascript
npm install
```

## Getting Started
Locally build, start http server, open browser:
```javascript
npm start
```

## Get png files for usage in print publications
- In the Chrome browser: Open print.html?Indikatorenset=_indikatorensetname_
- All charts in the given Indikatorenset are rendered in the browser, then locally exported to png files. These are saved by the browser to the "Downloads" folder. 


## Get Charts from "Umweltbericht beider Basel"
- In the command line (e.g. in c9.io): run 
```javascript
npm run build:umwelt_charts
```
- This uses casperJs / phantomJs to open all charts of Indikatorenset "Umwelt" and save their Highcharts configuration in charts/config/indikatorenset and charts/configs/portal. 
- Create svg files, e.g. by running the command 
```javascript
npm run build
```

## Development
### Add or Update Data
Copy the data as tab-separated tsv file named _id_.tsv into the folder 'data'. Refresh browser.  

### Add or Update Metadata
- Copy the json file named _id_.json into the folder 'metadata/single'. 
- On test system (https://github.com/statabs-test/indikatoren), the master branch is automatically built and deployed to [github pages](https://statabs-test.github.io/indikatoren/) via [travis-ci](https://travis-ci.org/statabs-test/indikatoren) - thus no local build necessary. 
- For a local build: Rebuild the project to regenerate the json databases for indikatorensets (in folder 'metadata/sets') and for all indikatoren (file metadata/portal/indikatoren.js): 
```javascript
npm run build
``` 

### Add or Update Chart Configurations
- Copy the chart configuration file named _id_.js into the folder 'charts/templates'. The file needs to contain a self-calling function that returns the Highchart configuration details that differ from the chart's template. At least the "series" node is required. 
- On test system (https://github.com/statabs-test/indikatoren), the master branch is automatically built and deployed to [github pages](https://statabs-test.github.io/indikatoren/) via [travis-ci](https://travis-ci.org/statabs-test/indikatoren) - thus no local build necessary. 
- For a local build: Rebuild the project to regenerate metadata databases, final chart configurations, and svg thumbnail images for all indicators: 
```javascript
npm run build
``` 

### Build Application Locally  
To build the application,  create the json config files and the svg images of the charts that have changed since the last build: 
```javascript
npm run build
```

To build the application and rebuild all json config files and all chart's svg images: 
```javascript
npm run rebuild
```

Manually create svg thumbnails: 
- For the portal view: In Chrome, open thumbnails.html.
- For the indikatorenset view: In Chrome, open thumbnails.html?indikatorensetView=true.
This will download all svg files to the local downloads directory. You can then manually move them to their respective directory below /images/.


### Updating dependencies
Update version numbers in package.json, then run the following command to do a clean reinstall: 
```javascript
npm run reinstall
```


### Develop using [cloud9](https://c9.io)
- Create new hosted workspace based on the node.js template and the correct github repo
- Run the following command. This will set node.js version to 6, install true type fonts, and install the application.
```shell
./c9-setup.sh
```
- Run application on c9: Click "Run", "New Run Configuration...", click "Runner", click "Apache httpd". Now click Run, then click the url displayed in the console log: ```https://<c9-vm-name>-<c9-username>.c9users.io```


##Licensing
[Highcharts] (http://www.highcharts.com/) is free for personal, school or non-profit projects under the Creative Commons Attribution - Non Commercial 3.0 License.
For commercial and governmental websites and projects, you need to buy a license. See [License and Pricing] (http://shop.highsoft.com/highcharts.html).
