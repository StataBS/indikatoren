(function(){
    return {
  "plotOptions": {
  	   series: {
          //pointWidth: 5, 
        },
    "column": {
        //"colorByPoint": true
    }
  },
 "xAxis": {
    "type": "category",
    "labels": {
      "formatter": function() {
        return this.value.replace("BS", "<b>BS<br/>");
},
      "rotation": 0 
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
    name: 'Kanton',
    color: "#008AC3"
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

  /*"colors": [
    "#A8C3CA",
    "#689199",
    "#A8C3CA",
    "#A8C3CA",
    "#A8C3CA",
    "#A8C3CA",
    "#A8C3CA",
    "#A8C3CA",
    "#A8C3CA",
    "#A8C3CA",        
    "#A8C3CA",
    "#A8C3CA",
    "#A8C3CA",
    "#A8C3CA",
    "#A8C3CA",
    "#A8C3CA",
    "#A8C3CA",
    "#A8C3CA",
    "#A8C3CA",
    "#A8C3CA",
    "#A8C3CA", 
    "#A8C3CA",
    "#A8C3CA",
    "#A8C3CA",
    "#A8C3CA",
    "#A8C3CA",
  ],*/
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