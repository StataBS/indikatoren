(function(){
  return {
  "yAxis":{
   "tickInterval": 0.2,
   //"max": 1,
    "labels": {
        "format": "{value:,.1f}",
    },
    
},
 "xAxis": {
      "type": "category",
          labels: {
            rotation: -45,
              formatter: function () {
                  //add sum of observations of visible series to the axis label
                  var allVisibleSeries = this.chart.series.filter(function (val, i, arr) {
                      return val.visible;
                  });
                  var indexOfCurrentValue = this.axis.names.indexOf(this.value);
                  var sum = allVisibleSeries.reduce(function (accumulator, series, index, arr) {
                      return accumulator + series.yData[indexOfCurrentValue];
                  }, 0);
                  //use N if all series are visible, otherwise use n
                  var nString =  'n=';
                    if (this.value.match(/Total/)) nString = (this.chart.series.length == allVisibleSeries.length) ? 'N=' : 'n=';

                  //delete everything before ":", including ":"
                  this.value = this.value.replace(/[^:]*:/, "").replace("Basel-Stadt", "BS").replace("Basel-Landschaft", "BL").replace("Zürich", "ZH").replace("Schweiz", "CH");

                  //check for value that contains only spaces
                  if (sum != 0) return this.value;
                  //else, if sum = 0, then it is assumed to be an intermediate title. return it bold
                  return "<b>" + this.value + "</b>";
              }
          }
}, 
"tooltip": {
  "pointFormat": '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:,.3f}</b><br/>',
  "footerFormat": 'Total: <b>{point.total:,.3f}</b><br/>',
  "shared": false
},
"plotOptions": {
  "series": {
      borderWidth: 0,
      pointPadding: 0.2,
      //groupPadding: 0.1,
      "dataLabels": {
          "style": {
              "fontSize": "10px"
          }
      },
      "stacking": "normal"
  }
},
"legend": {
 // x:-10,
  itemWidth: 153,
  width: 345,
  itemDistance: 0,
  itemStyle: {
    textOverflow: "none",
    //whiteSpace: "nowrap"
  },
  "layout": "horizontal",
  "verticalAlign": "top",
  "align": "left",
  "itemMarginBottom": 0,
  labelFormatter: function(){
   return this.name.replace("Medizinaltechnik", "Medizinaltechnik")
    .replace("Chemische Industrie", "Chemie") 
    .replace("Pharmazeutische Industrie", "Pharma")
    .replace("Maschinenbau", "Maschinen")
    .replace("Sonstiges", "Sonst.");
  }
},
  "series": [
    {"color": "#b00000", "index": 9, "legendIndex":0}, /*grün dunkel2*/
    {"color": "#4f81bd", "index": 8, "legendIndex":1}, /*grün mittel*/
    {"color": "#9A86A6", "index": 7, "legendIndex":2}, /*grün dunkel1*/
    {"color": "#9bbb59", "index": 6, "legendIndex":3}, /*grün hell*/
    {"color": "#FABD24", "index": 5, "legendIndex":4}, /*blau hell */
    ],
  "chart": {     
     //marginLeft: 110,
       "inverted": false,
  },
  exporting: {
    allowHTML: false,
  }
};
}());

