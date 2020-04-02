(function(){
    return {
  "plotOptions": {
  	   series: {
        pointPadding: 0
          //pointWidth: 5, 
        },
    "column": {
        
    }
  },
 "xAxis": {
    "type": "category",
    "labels": {
      "rotation": 0,
      "formatter": function() {
        return this.value.replace("BS", "<b>BS<br/>");
},
      padding: 0,
      step: 1,
    } 
  },
  "yAxis": {
    //tickAmount: 8,
    plotLines: [{
      value: 0,
      color: '#B9CFD7',
      width: 1
    }],
    tickInterval: 0.5,
    "labels": {
      "format": "{value:,.1f}", 
    }
  },
  
  series: [{
    
    "color":'#008AC3'
  },
  {
    
    "color":'#A0BEC8'
  }    
    ],
  "legend": {
    "enabled": true,
    "layout": "horizontal",
    "verticalAlign": "top",
    "align": "left",
    //"x": 35,
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