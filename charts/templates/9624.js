(function(){
  return {
 chart: {
  type: "column",
  marginRight: 25
 },
plotOptions: {
      series: {
        "stacking": "normal",
    pointPadding: 0,
          borderWidth: 0,
          pointWidth: 30, 

      }/*,
       area: {
          stacking: 'normal',
          //lineColor: '#666666',
          lineWidth: 0,
        
      }*/
},
"yAxis": {
  "labels": {
    "format": "{value:,.0f}",
  },
  //max: 300000,
  min: -100000
},
xAxis: {
  type: "category", /* muss "category" sein, sonst funktioniert es nicht richtig */
  tickPositioner: function () {
    var maxlabels = 10,
      ext = this.getExtremes(),
      i = Math.round(ext.max),
      interval = Math.round((i - ext.min)/maxlabels),
      pos = [i];
    while (i >= ext.min) pos.unshift(i = i - interval);
    return pos;
  }
},
legend: {
  enabled: true,
  layout: "horizontal",
  verticalAlign: "top",
  align: "left",
//"y": 40,
 itemWidth: 190,
itemMarginBottom: 5,
  itemStyle: {
  fontWeight: "normal"
  }
},
series: [
  {
    color: "#E7CEE2",
    stack: 0
},
{
    color: "#FFDA80",
    stack: 0
},
{
    color: "#B375AB",
    showInLegend: "false",
    stack: 0
},
{
  color: "#FABD24",
  showInLegend: "false",
  stack: 0
},
{
  color: "#923F8D",
  type: "line",
  stack: 1
},
{
  color: "#CD9C00",
  type: "line",
  stack: 2
},
{
  color: "#3C3C3C",
  type: "line",
  stack: 3
},

],  
tooltip: {
  pointFormat: '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}</b> m<sup>2 </sup> <br/>',
 shared: true,
 useHTML: true
},
};
}());
