(function(){
    return {
"plotOptions": {
    "series": {
      pointPadding: 100,
      borderWidth: 0,
      "pointWidth": 10,
      "dataLabels": {
        "style": {
          "fontSize": "10px"
        }
      },
      "stacking": "normal"
    }
  },
  "xAxis": {
  	min: 0,
    "type": "category",
    "tickInterval": 1,
    labels:{
    	step: 1,
    	x: -5,
    	y: 3,
    	rotation: 0,
    }
  },  
  "yAxis": {
    tickInterval: 250,
    labels: {
    	y: 18,
      "format": "{value:,.0f}",
        rotation: 0,
    },
  },
  "legend": { 
  	itemDistance: 0, 
  	padding: 0,
  	symbolPadding: 0,
    "enabled": true,
    "layout": "vertical",
    "verticalAlign": "middle",
    "align": "right",
     "itemStyle": {
      "fontWeight": "normal"
     },
    labelFormatter: function(){
    	return this.name.replace("und", "u.");	
     },

  },
 "series": [
  {"color": "#B00000", index: 10, legendIndex: 0}, /*Schweiz*/
  {"color": "#672773", index: 9, legendIndex: 1}, /*Deutschland*/
  {"color": "#007a2f", index: 8, legendIndex: 2}, /*Italien*/
  {"color": "#fabd24", index: 7, legendIndex: 3}, /*Türkei*/
  {"color": "#b475ab", index: 6, legendIndex: 4}, /*EU-17 & EFTA*/
  {"color": "#71a3b5", index: 5, legendIndex: 5}, /*EU-Ost */
  {"color": "#b9cfd7", index: 4, legendIndex: 6}, /*Balkan*/
  {"color": "#ff8028", index: 3, legendIndex: 7}, /*Mittel- & Südamerika */
  {"color": "#73ba7c", index: 2, legendIndex: 8}, /*Arabische Länder */
  {"color": "#9f7c5a", index: 1, legendIndex: 9}, /*Afrikanische Länder*/
  {"color": "#999999", index: 0, legendIndex: 10}, /*Übrige Länder*/
],
  "chart": {
    //"marginRight": 8,
    "type": "column",
    "inverted": true,
  },
  "tooltip": {
  "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}</b><br/>',
  },
};
}());
