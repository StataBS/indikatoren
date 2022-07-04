(function(){
    return {
      "plotOptions": {
    "series": {
      //pointPadding: 0,
      borderWidth: 0,
      //pointWidth: 20,
      "dataLabels": {
        "style": {
          "fontSize": "10px"
        }
      },
      "stacking": "normal"
    }
  },
  series: [
    {"color": "#b00000", index: 9, legendIndex: 0}, /**/
    {"color": "#008AC3", index: 8, legendIndex: 1}, /**/
    {"color": "#FABD24", index: 7, legendIndex: 2}, /**/
    {"color": "#68AB2B", index: 6, legendIndex: 3}, /**/
    {"color": "#FF8028", index: 5, legendIndex: 4}, /**/
    {"color": "#923F8D", index: 4, legendIndex: 5}, /* */
    {"color": "#9E7C59", index: 3, legendIndex: 6}, /* */
    {"color": "#999999", index: 2, legendIndex: 7}, /* */

  ],
  chart: {
    type: "column", 
    marginRight: 20
  },
  "tooltip": {
    "shared": false, 
    "pointFormat": '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f} </b> ({point.percentage:.1f}%)<br/>',
    "footerFormat": '<span style="color: black"></span> Total: <b>{point.total:,.0f}</b>',
  },
  legend: {
    itemDistance: 10,
  //symbolPadding: 2,
 // itemWidth: 209,
 // Width: 450,
    "enabled": true,
    "layout": "horizontal",
    "verticalAlign": "top",
    "align": "left",
	  //"y": 45,
    "itemStyle": {
      "fontWeight": "normal",
     
    }
  },  
  yAxis: {
    "labels": {
     format: "{value:,.0f}"
     }
  },
  xAxis: {
    labels: {
        rotation: 0,
      } ,
    type: "category",
    tickPositioner: function () {
        var maxlabels = 11,
            ext = this.getExtremes(),
            i = Math.round(ext.max),
            interval = Math.round((i - ext.min) / maxlabels),
            pos = [i];
        while (i >= ext.min) pos.unshift(i = i - interval);
        return pos;

    }
},

};
}());