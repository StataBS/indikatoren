(function(){
    return {
  plotOptions: {
        series: {
        	"stacking": "normal",
             groupPadding: 0,
        }
  },
  "yAxis": {
    //max: 200000,
    tickAmount: 8,
    "labels": {
      "format": "{value:,.0f}",
    }
  },
  "xAxis": {
  	"type": "category",
   "tickInterval": 1,
          "labels": {
          	step: 1,
            //"rotation": 0,
            "rotation": -45,
        }  
  },
 "legend": {
    enabled:true,
    "layout": "vertical",
    "verticalAlign": "middle",
    "itemMarginBottom": 5, 
    "align": "right",
    "itemStyle": {
      "fontWeight": "normal"
    }
  },
 "series": [
  {"color": "#007a2f", "index": 9, "legendIndex":9}, /*grün dunkel2*/
  {"color": "#44ab2b", "index": 8, "legendIndex":8}, /*grün mittel*/
  {"color": "#73ba7c", "index": 7, "legendIndex":7}, /*grün dunkel1*/
  {"color": "#d7e9d2", "index": 6, "legendIndex":6}, /*grün hell*/
  {"color": "#b9cfd7", "index": 5, "legendIndex":5}, /*blau hell */
  {"color": "#71a3b5", "index": 4, "legendIndex":4}, /*blau dunkel */
  {"color": "#ffbb58", "index": 3, "legendIndex":3}, /*orange hell */
  {"color": "#ff8028", "index": 2, "legendIndex":2}, /*orange dunkel */
  {"color": "#b00000", "index": 1, "legendIndex":1}, /*rot dunkel */
  {"color": "#E7CEE2", "index": 0, "legendIndex":0} /*lila */
  ],
  "tooltip": {
    "pointFormat": '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b> ({point.percentage:.1f}% von {point.total:,.0f})<br/>',
     "shared": false
    },

  "chart": {
  	type: "column",
    "inverted": false,
  }
};
}());





