(function(){
    return {
  "xAxis": {
    type: 'category',
    "tickInterval": 4,
  },
  "yAxis": {
    "min": 0, 
    tickAmount: 4,
	  "labels": {
		  "format": "{value}%"
	  }
  },	
  "tooltip": {
    "shared": false, 
	"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:.1f}%</b><br/>'
  },
 "series": [
  {color: "#b00000"}, /*Schweiz*/
  {color: "#672773"}, /*Deutschland*/
  {color: "#007a2f"}, /*Italien*/
  {color: "#fabd24"}, /*Türkei*/
  {color: "#b475ab"}, /*EU-17 & EFTA*/
  {color: "#71a3b5"}, /*EU-Ost */
  {color: "#b9cfd7"}, /*Balkan*/
  {color: "#ff8028"}, /*Mittel- & Südamerika */
  {color: "#73ba7c"}, /*Arabische Länder */
  {color: "#9f7c5a"}, /*Afrikanische Länder*/
  {color: "#999999"}, /*Übrige Länder*/
  
  { 
    color: "#b00000", 
    showInLegend: false,
    marker: {
      enabled: true,
    }
  }, /*Schweiz*/
  {
    color: "#672773",
    showInLegend: false,
    marker: {
      enabled: true,
    }
  }, /*Deutschland*/
  {
    color: "#007a2f",
    showInLegend: false,
    marker: {
      enabled: true,
    }    
  }, /*Italien*/
  {
    color: "#fabd24",
    showInLegend: false,
    marker: {
      enabled: true,
    }
  }, /*Türkei*/
  {
    color: "#b475ab",
    showInLegend: false,
    marker: {
      enabled: true,
    }
  }, /*EU-17 & EFTA*/
  {
    color: "#71a3b5",
    showInLegend: false,
    marker: {
      enabled: true,
    }
  }, /*EU-Ost */
  {
    color: "#b9cfd7",
    showInLegend: false,
    marker: {
      enabled: true,
    }
  }, /*Balkan*/
  {
    color: "#ff8028",
    showInLegend: false,
    marker: {
      enabled: true,
    }
  }, /*Mittel- & Südamerika */
  {
    color: "#73ba7c",
    showInLegend: false,
    marker: {
      enabled: true,
    }
  }, /*Arabische Länder */
  {
    color: "#9f7c5a",
    showInLegend: false,
    marker: {
      enabled: true,
    }
  }, /*Afrikanische Länder*/
  {
    color: "#999999",
    showInLegend: false,
    marker: {
      enabled: true,
    }
  }, /*Übrige Länder*/

  ],
   "legend": {
    "enabled": true,
    itemDistance: 1, 
    "layout": "horizontal",
    "verticalAlign": "top",
    //"itemMarginBottom": 5,
    "align": "left",
    labelFormatter: function(){
      return this.name.split("(")[0].replace("und", "u.");//.replace(" und Süd", " <br/>und Süd");
    },
    "itemStyle": {
      "fontWeight": "normal"
    }
  },
  "plotOptions": {
    "line": {
      "marker":{
        "enabled": false,
        "symbol": "circle",
        radius: 1.5
      } 
    }
  }
};
}());