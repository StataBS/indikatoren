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
      "rotation": -90,
      padding: 0,
      step: 1,
    } 
  },
  "yAxis": {
    //tickAmount: 8,
    tickInterval: 0.5,
    "labels": {
      "format": "{value:,.1f}", 
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
  ],
  "legend": {
    "enabled": false,
    "layout": "horizontal",
    "verticalAlign": "top",
    "align": "left",
    "x": 35,
	//"y": 35,    
    "itemStyle": {
      "fontWeight": "normal"
    }
  },
   tooltip: {
    headerFormat: '<span style="font-size: 10px">{series.name}</span><br/>',
    pointFormat: '<span style="color:{point.color}">\u25CF</span> {point.name}: <b>{point.y:,.2f}</b><br/>',
    "shared": false
  },
  "chart": {      
    width: 665,
    "type": "column",
    "inverted": false,
    spacingBottom: 5,
    spacingTop: 5,
  }
}
}());