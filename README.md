# Indikatorenportal Statistisches Amt Basel-Stadt
Find and display statistical indicators from the canton of Basel-Stadt, Switzerland. See live version [here](http://www.statistik.bs.ch/zahlen/indikatoren/).  

## Local Installation
Install [node.js](https://nodejs.org). Then run the following command in the console: 
```javascript
npm install
```

## Getting Started
Locally build, start http server, open browser:
```javascript
npm start
```

## Development
# Add or Update Data
Copy the data as tab-separated csv file named <kuerzel>.csv into the folder 'data'. Refresh browser.  

# Add or Update Metadata
- Copy the js file named <kuerzel>.js into the folder 'metadata/single'.
- On test system (https://github.com/statabs-test/indikatoren), the master branch is automatically built and deployed to [github pages](https://statabs-test.github.io/indikatoren/) via [travis-ci](https://travis-ci.org/statabs-test/indikatoren) - thus no local build necessary. 
- For a local build: Rebuild the project to regenerate the json databases for indikatorensets (in folder 'metadata/sets') and for all indikatoren (file metadata/indikatoren.js): 
```javascript
npm run build
``` 

# Add or Update Chart Configurations
- Copy the chart configuration file named <kuerzel>.js into the folder 'charts/templates'.
- On test system (https://github.com/statabs-test/indikatoren), the master branch is automatically built and deployed to [github pages](https://statabs-test.github.io/indikatoren/) via [travis-ci](https://travis-ci.org/statabs-test/indikatoren) - thus no local build necessary. 
- For a local build: Rebuild the project to regenerate metadata databases, final chart configurations, and svg thumbnail images for all indicators: 
```javascript
npm run build
``` 

# Build Application Locally  
Build:
```javascript
npm run build
```

Manually create svg thumbnails: 
- For the portal view: In Chrome, open thumbnails.html.
- For the indikatorenset view: In Chrome, open thumbnails.html?indikatorensetView=true.
This will download all svg files to the local downloads directory. You can then manually move them to their respective directory below /images/.
