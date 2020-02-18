/*
    global Highcharts
*/

(function(){
    return {
    series: [
        {
            color: "rgb(168, 196, 203)",
        },
        {
            color: "rgb(105, 146, 155)",
        },
        {
            color: "rgb(176, 0, 0)",
            type: 'scatter',
            marker: {
                symbol: 'diamond', 
                radius: 5
            },
            pointPlacement : -0.15
        },
        {
            color: "rgb(220, 68, 14)",
            type: 'scatter',
            marker: {
                symbol: 'diamond', 
                radius: 5
            },
            pointPlacement : 0.15
        }        
  ],
  xAxis: {
      labels: {
          rotation: -45,
          	
      },
      type: "category",
     
  },
  yAxis: [
      { 
        tickAmount: 6,
        gridLineColor: '#B9CFD7', 
        gridLineWidth: 0.5,
        lineColor: '#B9CFD7', 
        title: {
            style: {
                color: "#000000",
                fontSize: null
            },
            text: null
        },
        labels: {
        	format: "{value:,.0f}",
            style: {
            color: "#000000"
            }
        }
      },
      {
        tickAmount: 6,
        max: 0.35,
        tickInterval: 0.07,
        opposite: true,
        min: 0,
        gridLineColor: '#B9CFD7', 
        gridLineWidth: 0.5,
        lineColor: '#B9CFD7', 
        title: {
            style: {
                color: "#000000",
                fontSize: null
            },
            text: null
        },
        labels: {
            style: {
                color: "#000000"
            }, 
            formatter: function() {
               return Highcharts.numberFormat((this.value*100), 0)+'%';
            
                
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
    useHTML: false,
    y: -40,
    layout: "horizontal",
    verticalAlign: "top",
    itemMarginBottom: 5,     
    align: "right",
    itemStyle: {
        fontWeight: "normal",
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
    	text: 'Logiernächte:<br/>Marktanteile (rechte Skala):', 
    	style: {
    	  fontWeight: 'normal'
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
            title.translate(-215, 40);
          }
        }              
 }
	};
}());

 