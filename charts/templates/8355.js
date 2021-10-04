(function(){
    return {
 "xAxis": {
    "tickInterval": 1,
  },
  "yAxis": {
    min: 40,
    tickInterval: 20,
	"labels": {
		"format": "{value:,.0f}"
	}
  },	
  "tooltip": {
    "shared": false, 
	"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.1f}</b><br/>'
  },
  "series": [
    {"color": "#8B2223", "index": 13}, /*dunkelrot */
    {"color": "#DC440E", "index": 12}, /*hellrot */
    {"color": "#FF8028", "index": 11}, /*dunkelorange */
    {"color": "#FFBB58", "index": 10}, /*dunkelgelb */
    {"color": "#FFDA80", "index": 9}, /*hellgelb */
    {"color": "#007A2F", "index": 8}, /*dunkelgrün */
    {"color": "#D7E8D2", "index": 7}, /*hellgrün1 */
    {"color": "#73BA7C", "index": 6}, /*hellgrün2 */
    {"color": "#2B0099", "index": 5}, /*dunkelblau1 */
    {"color": "#008AC3", "index": 4}, /*dunkelblau2 */
    {"color": "#B9CFD7", "index": 3}, /*hellblau */
    {"color": "#672773", "index": 2},  /*dunkelpink */
    {"color": "#E7CEE2", "index": 1},  /*hellpink */
 ],
  "legend": {
    "enabled": true,
    "layout": "vertical",
    "verticalAlign": "middle",
    "align": "right",
    "itemMarginBottom": 5,
    "itemStyle": {
      "fontWeight": "normal"
    }
  },
  "chart": {
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
}
}());