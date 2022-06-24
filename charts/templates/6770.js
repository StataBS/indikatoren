(function(){
    return {
  plotOptions: {
        series: {
        	"stacking": "normal",
            pointPadding: 0,
            groupPadding: 0.5, // exaclty overlaps columns,
            borderWidth: 0
        }
  },
  "yAxis": {
    max: 100,
    tickInterval: 25,
    "labels": {
      "format": "{value:,.0f}%",
   
    }
  },
  "xAxis": {
    "type": "category",
    "labels": {
      "rotation": -45 ,
        "formatter": function() {
          return this.value
            .replace("Altstadt Grossbasel", "Altstadt GB")
         //   .replace("Kleinhüningen", "Kleinh.")
          //.replace("Hirzbrunnen", "Hirzbr.")
            .replace("Altstadt Kleinbasel", "Altstadt KB");
        //  .replace("Gundeldingen", "Gundeld.")
      }
    } 
  },
 "legend": {
    "enabled": true,
    "layout": "horizontal",
    "verticalAlign": "top",
    "align": "left",
	 "itemMarginBottom": 5,
	  //itemWidth: 130,
    "itemStyle": {
    "fontWeight": "normal"
    }
  },
  "series": [
      {
      "color": "#71A3B5", //blau
      "type": "column",
      "pointWidth": "15",
      "index": 5,
      legendIndex: 0
    },
      {
      "color": "#CD9C00", // senfgelb
      "type": "column",
      "pointWidth": "15",
      "index": 4,
      legendIndex: 1
    },
      {
      "color": "#B00000", //rot
      "type": "column",
      "pointWidth": "15",
      "index": 3,
      legendIndex: 2
    },
     {
      "color": "#FF8028", // orange
      "type": "column",
      "pointWidth": "15",
      "index": 2,
      legendIndex: 3
    },
      {
      "color": "#923F8D", // violett
      "type": "column",
      "pointWidth": "15",
      "index": 1,
      legendIndex: 4
    },        
      {
      "color": "#999999", //grau 
      "type": "column",
      "pointWidth": "15",
      "index": 0,
      legendIndex: 5
    },

  ],  
  "tooltip": {
    "pointFormat": '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:,.1f}%</b><br/>',
    "shared": false
  },
  "chart": {
    "type": "column",
    "inverted": false,
  	width: 662, 
  	height: 208,
  	//marginBottom: 120,
	  spacingTop: 5,
spacingBottom: 5,
      	
/*    
    "marginBottom": 65,
    "type": "line",
    "alignTicks": false
*/    
  }
};
}());

