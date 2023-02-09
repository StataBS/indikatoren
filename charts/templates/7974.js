/*
    global Highcharts
*/

(function(){
  return {
  series: [
      {
          color: "rgb(255, 218, 128)",
          dataLabels: {
          enabled: false,
          y: 20,
          style: {
              inside: true,
              fontSize: "9px", 
              color: 'black', 
              fontWeight: 'normal',
              textOutline: undefined
          }
      },
      },
      {
          color: "rgb(186, 168, 90)",
           dataLabels: {
          enabled: false,
          y: 20,
          style: {
              inside: true,
              fontSize: "9px", 
              color: 'black', 
              fontWeight: 'normal',
              textOutline: undefined
          }
      },
      },
      {
          color: "rgb(220, 68, 14)",
          type: 'scatter',
          marker: {
              enabled: true,
              symbol: 'diamond', 
              radius: 6
          },
          pointPlacement : -0.15,
          pointRange: 1
      },
      {
          color: "rgb(139, 34, 35)",
          type: 'scatter',
          marker: {
              enabled: true,
              symbol: 'diamond', 
              radius: 6
          },
          pointPlacement : 0.15,
          pointRange: 1
      }        
],
xAxis: {
    type: "category",
    labels:{
        rotation: 0,
        style:{
   fontSize: '9px'}
    }
},
yAxis: [
    {
      tickAmount: 6,
      max: 2500,
      //*tickInterval: 350,
      gridLineColor: '#B6CFD7', 
      gridLineWidth: 0.35,
      lineColor: '#B6CFD7', 
      title: {
          style: {
              color: "#000000",
              fontSize: null
          },
          text: null
      },
      labels: {
          y: 2.5,
          x: -8,
        format: "{value:,.0f}",
          style: {
              fontSize: '9px',
          color: "#000000"
          }
      }
    },
    {
      tickAmount: 6,
      max: 0.75,
      tickInterval: 0.15,
      opposite: true,
      min: 0,
      gridLineColor: '#B6CFD7', 
      gridLineWidth: 0.35,
    
      lineColor: '#B6CFD7', 
      title: {
          style: {
              color: "#000000",
              fontSize: null
          },
          text: null
      },
      labels: {
          y: 2.5,
          x: 8,
          style: {
              fontSize: '9px',
              color: "#000000"
          }, 
          formatter: function() {
             return 100 * this.value + "%";
          }
      }
    }
  ],
plotOptions: {
  series: {
      stacking: null,
      pointPadding: 0,
      borderWidth: 0,
      //pointWidth: 10, 

  }, 
  scatter: {
      yAxis: 1,
      tooltip: {
        headerFormat: '<span style="font-size: 10px"> {point.key}</span><br/>',
        pointFormatter: function(){ 
            return '<span style="color:' + this.color + '">●</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat(100 * this.y, 1, ",", " ") + '%</b><br/>';
        }
      }
  }
},
legend: {
  useHTML: true,
  y: -50, //40
  layout: "horizontal",
  verticalAlign: "top",
  itemMarginBottom: 0,
  margin: 20,     
  align: "center",
  itemStyle: {
      fontWeight: "normal",
      fontSize: "10px",
      width: 40        
  },
  width: 200,
  itemWidth: 70,    
  symbolRadius: 0,
  labelFormatter: function(){
      //remove text before year on each item with odd index
      //return (this.index % 2 != 0) ? this.name.slice(-4) : this.name;
      return this.name.slice(-4);
  }, 
  title: {
    text: ' <br>Verfügbare Zimmer:<br> Nettozimmerauslastung (rechte Skala):</div>', 
    style: {
      fontWeight: 'normal',
      fontSize: '10px'
    }
  },

},
data: {
    switchRowsAndColumns: true
},
 tooltip: {
  "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b><br/>',
  "shared": false
},
chart: {
      type: 'column',
      width: 665, //661.41732283,
      //height: 207.87401575,
      spacingTop: 30,
      spacingBottom: 6,
      events: {
        load: function(){
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
          var title = this.legend.title;
          title.translate(-200, 25);
        }
      }              
}
};
}());

