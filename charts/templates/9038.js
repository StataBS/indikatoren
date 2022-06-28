(function(){
    return {
   plotOptions: {
        series: {
            pointPadding: 0.1,
            borderWidth: 0,
        }
   },

  "xAxis": {
    "type": "category",
    width: 267,
    labels:{
     // x: -5,
      rotation: 0,
      style:{
        //textOverflow: 'ellipsis',
        overflow: "allow",
        textOverflow: "none",
        whiteSpace: "nowrap"
      }
    }
  },
  "yAxis": {
    offset: -5,
    tickAmount:6,
    //max: 500000,
  	//"min": 0,
  	//"max": 0.5,
    "labels": {
      "format": "{value:,.0f}"
    }    
  },
  "series": [
  {"color": "#923F8D"},
  {"color": "#DC440E"}, 
  {"color": "#FFDA80"},  
  ],
  "legend": {
    "enabled": true,
    "layout": "horizontal",
    "verticalAlign": "top",
    "align": "left",
    //width:500,
   
    //itemDistance: 0,
    //symbolPadding: 0,
    itemStyle: {
      //textOverflow: "none",
      //whiteSpace: "nowrap", 
      "fontWeight": "normal",
    }
  },
  tooltip: {
    pointFormat: '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f} m²</b><br/>' ,
  },  
  "chart": {
    spacingLeft: 0,
    marginRight: 0,
    "type": "column",
    "inverted": false,
  }
}
}());

 