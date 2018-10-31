(function(){
    return {
  "plotOptions": {
  	   series: {
          //pointWidth: 5, 
        },
    "column": {
        "colorByPoint": true
    }
  },
 "xAxis": {
    "type": "category",
    "labels": {
      "rotation": -90 
    } 
  },
  "yAxis": {
	"max": 100,
	tickInterval: 25,
    "labels": {
      "format": "{value:,.0f}", 
      y: 3
    }    
  },
  
  series: [{
    name: 'Kanton'
  }],

  /*"series": [
           function() {
           var col;
				if(this.series.data[0]=="BS"){
		   col="#0066FF";
				}else {
    		col="#0066EE";
			}
            }, 
  {"color": "col", "visible": true}, 
  ],*/

    "colors": [
    "#69929B",
    "#69929B",
    "#B00000",
    "#69929B",
    "#69929B",
    "#69929B",
    "#69929B",
    "#69929B",
    "#69929B",
    "#69929B",        
    "#69929B",
    "#69929B",
    "#69929B",
    "#69929B",
    "#69929B",
    "#69929B",
    "#69929B",
    "#69929B",
    "#69929B",
    "#69929B",
    "#69929B", 
    "#69929B",
    "#69929B",
    "#69929B",
    "#69929B",
    "#69929B",
  ],
  "legend": {
    "enabled": false,
    "layout": "horizontal",
    "verticalAlign": "top",
    "align": "left",
    "itemStyle": {
      "fontWeight": "normal"
    }
  },
   tooltip: {
    headerFormat: '<span style="font-size: 10px">{series.name}</span><br/>',
    pointFormat: '<span style="color:{point.color}">\u25CF</span> {point.name}: <b>{point.y:,.0f}</b><br/>',
    "shared": false
  },
  "chart": {      
    "type": "column",
    "inverted": false,
    width: 665,
    marginTop: 5,
    //"spacingBottom": 40
  }
}
}());