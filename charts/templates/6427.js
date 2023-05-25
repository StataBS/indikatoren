(function(){
    return {
      xAxis: {
        tickPositioner: function () {
          var interval = 1,
            ext = this.getExtremes(),
            i = ext.dataMax,
            pos = [i];
          while (i >= ext.dataMin) pos.unshift(i = i - interval);
          return pos;
        }
      },
  "yAxis": {
    "min": 0, 
    tickInterval: 10,
	  "labels": {
		  "format": "{value}%"
	  }
  },	
  "tooltip": {
    "shared": false, 
	"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:.1f}%</b><br/>'
  },
 "series": [
    {"color": "#b00000"},/*, /*Schweiz*/
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
   "legend": {
   		/*labelFormatter: function () {
        return this.name.slice(0, this.name.indexOf('(Stadt)'));
        //return this.name.slice(0, -8)
      },*/
    "enabled": true,
    itemDistance: 5, 
    "layout": "horizontal",
    "verticalAlign": "top",
    "itemMarginBottom": 5,
    "align": "left",
    "itemStyle": {
      "fontWeight": "normal"
    }
  },
  "plotOptions": {
    "line": {
      "marker":{
        "enabled": false,
        "symbol": "circle",
        radius: 2
      } 
    }
  },
  chart:{
  	   "height": 500,    
  }
}
}());