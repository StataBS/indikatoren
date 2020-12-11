/*
global Highcharts
*/

(function(){
  return {
chart: {		
  events:{
        load: function() {
            this.credits.element.onclick = function() {};
            
            //for top-left legends with no x defined: move legend to x position of first yAxis
            if (this['legend']['options']['align'] == 'left' && this['legend']['options']['verticalAlign'] == 'top' && this['legend']['options']['x'] == 0){
              this.update(
                {
                  legend: {
                    x: this.yAxis[0].left - this.spacingBox.x - this.legend.padding
                  }
                }
              );
            }
            //move legend title
           /* var title = this.legend.title;
            title.translate(-128, 25);*/
        }
    },
    marginRight: 15
},
xAxis: {
  tickInterval: 1,
  "labels": {
    rotation: 0 
}
},
yAxis: {
  min: 0,
  tickAmount: 6,
  labels: {
    formatter: function() {
       return 100 * this.value + "%";
      },
       style: {
        fontSize: '10px',
    color: "#000000"
    }
  }
},	
"tooltip": {
  shared: false, 
  pointFormatter: function(){
    return '<span style="color:'+ this.series.color+'">\u25CF</span> ' + this.series.name + ': <b>'+ Highcharts.numberFormat(100 * this.y, 1, ",", " ")  + '%</b><br/>';
  }
},
"series": [
  {
    color: 'rgb(220, 68, 14)',
  },
  {
    color: 'rgb(68, 141, 43)',
  },
  {
    color: 'rgb(250, 189, 36)',
  },
  /*{
    color: 'rgb(220, 68, 14)',
    dashStyle: "ShortDash",
    zIndex: -1
  },
  {
    color: 'rgb(68, 141, 43)',
    dashStyle: "ShortDash",
    zIndex: -1
  },
  {
    color: 'rgb(250, 189, 36)',
    dashStyle: "ShortDash",
    zIndex: -1
  }*/
],
"legend": {
  enabled: true,
  useHTML: true,
  //"y": -30,
  //"x": 22,
  "layout": "horizontal",
  "verticalAlign": "top",
  "itemMarginBottom": 3,
  "align": "left",
  "width": 210,
  "itemWidth": 70,    
  itemStyle: {
    "fontWeight": "normal",
    "width": 40
  },
  /*"title": {
    "text": ' <br>Effektiv:<br>Auf Basis Zimmerzahl 2009:</div>',
    style: {
      fontWeight: 'normal',
      fontSize: '10px'
    }
  },*/
  labelFormatter: function(){
      //remove text before year on each item with odd index
      //return (this.index % 3 != 0) ? this.name.slice(-5) : this.name;
      return this.name.slice(-5);
  }
},
plotOptions: {
  line: {
    marker:{
      symbol: 'circle', 
      //fillColor: '#FFFFFF',
      lineWidth: 2,
      lineColor: null // inherit from series
    }
  }
}
}
}());