(function(){
    return {
      chart: {
        spacing: [5,3,3,3], /*top, right, bottom and left */
        width: 665,
      },
  "xAxis": {
    "tickInterval": 1,
    labels: {
      step: 1,
      rotation: -45,
    },
  },
  "yAxis": {
    max: 40, 
    tickInterval: 10,
  	"labels": {
  		"format": "{value:,.0f}"
  	}
  },	
  "tooltip": {
    "shared": false, 
	"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}</b><br/>'
  },
  "series": [
    {"color": "#b00000"}, /*Schweiz*/
    {"color": "#672773"}, /*Deutschland*/
    {"color": "#007a2f"}, /*Italien*/
    {"color": "#fabd24"}, /*Türkei*/
    {"color": "#b475ab"}, /*EU-17 & EFTA*/
    {"color": "#71a3b5"}, /*EU-Ost */
    {"color": "#b9cfd7"}, /*Balkan*/
    {"color": "#ff8028"}, /*Mittel- & Südamerika */
    {"color": "#73ba7c"}, /*Arabische Länder */
    {"color": "#9f7c5a"}, /*Afrikanische Länder*/
    {"color": "#999999"}, /*Übrige Länder*/
    ],
  legend: {
    enabled: true,
    itemDistance: 5,
    y: -20,
    "layout": "vertical",
    "verticalAlign": "middle",
    "align": "right",
    "itemStyle": {
      "fontWeight": "normal"
    }
  },
  "plotOptions": {
    "line": {
	  "connectNulls": true,
      "marker":{
        "enabled": false,
        "symbol": "circle",
      }
    }
  }
};
}());
 