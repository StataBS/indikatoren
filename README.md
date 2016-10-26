# Indikatorenportal Statistisches Amt Basel-Stadt

Find and display statistical indicators from the canton of Basel-Stadt, Switzerland. See live version [here](http://www.statistik.bs.ch/zahlen/indikatoren/).  

## Installation
Install [node.js](https://nodejs.org). Then run the following command in the console: 
```javascript
npm install
```

## Getting Started
Build, start http server, open browser:
```javascript
npm start
```

## Development
Build:
```javascript
npm run build
```

Manually create svg thumbnails: 
- For the portal view: In Chrome, open thumbnails.html.
- For the indikatorenset view: In Chrome, open thumbnails.html?indikatorensetView=true.
This will download all svg files to the local downloads directory. You can then manually move them to their respective directory below /images/.
