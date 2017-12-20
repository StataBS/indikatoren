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
- To download a single chart as png, use chart.html?thumbnailOfflineExporting=false&thumbnailType=png&view=print&exportServer=https://[c9-workspace-url]:8081&id=[chart-id]
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

### Create Kennzahlensets for Print: Copy Data and Chart Configurations
- If a new kennzahlenset is created for print, it can be initialized with data and chart configurations of their respective parent kennzahlenset. 
- To do this, first upload the metadata files to metadata/single. 
- Then run 
```javascript
npm run build:init_print_charts
```
- This will check each metadata file for matching data/[id].tsv and charts/templates/[id].js. If tsv or js file is missing, it will be copied from the parent chart's file. 
- This is an excellent starting point to refine charts for printing. 


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


### Update dependencies
Update version numbers in package.json, then run the following command to do a clean reinstall: 
```javascript
npm run reinstall
```

### Develop in a private github repositoriy
- Develop in a private github repositoriy as you would do in the public repo: Create an issue, create a branch called 'issue-XXX' with XXX being the id of the issue. 
- When it's time to release the new functionality onto the public repository: 
    - In the private repo, define the public repo as a remote repo named "upstream" (of course use the correct https url, not the following dummy url. Use e.g. the address from the browser and add '.git' at the end): 
    ```shell
    git remote add upstream https://github.com/user/indikatoren.git
    ```
    - Add, commit and push your changes to the private repo as usual. 
    - Create a branch with the same name on the public github repository ('upstream'). 
    - Pull the latest commits from the public branch to the private branch: 
    ```shell
    git checkout issue-XXX
    git pull upstream issue-XXX
    ```
    - If there are conflicts (public and private branch have changes in common files), manually resolve the conflicts, then add, commit and push the resolved conflicts to the private branch. 
    ```shell
    git add .
    git commit -m"Merge upstream"
    git push
    ```
    - Push your changes to the branch 'issue-XXX' on the public repo: 
    ```shell
    git push upstream issue-XXX
    ```


### Develop using [cloud9](https://c9.io)
- Create new hosted workspace based on the node.js template and the correct github repo
- Run the following command. This will set node.js version to 6, install true type fonts, and install the application.
```shell
./c9-setup.sh
```
- Run application on c9: Click "Run", "New Run Configuration...", click "Runner", click "Apache httpd". Click into the field "Run Config Name" and type "Apache http" to give this configuration a name. Now click Run, then click the url displayed in the console log: ```https://<c9-vm-name>-<c9-username>.c9users.io```
- To make this runner configuration the default, right-click the green "Run" button, click "Manage...", click "Set as Default". Now, this runner is always invoked when you click the green "Run" button.

##Licensing
[Highcharts] (http://www.highcharts.com/) is free for personal, school or non-profit projects under the Creative Commons Attribution - Non Commercial 3.0 License.
For commercial and governmental websites and projects, you need to buy a license. See [License and Pricing] (http://shop.highsoft.com/highcharts.html).
