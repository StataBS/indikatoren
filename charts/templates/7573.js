(function(){
    return {
  plotOptions: {
        series: {
        	"stacking": "normal",
            pointPadding: 0,
            groupPadding: 0.5, // exaclty overlaps columns
            borderWidth: 0
        }
  },
  
  yAxis: [
      {
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
        opposite: true,
        min: 0,
        max: 0.012,
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
        	formatter: function(){
            return Highcharts.numberFormat(this.value*100, 1) + "%";
          },
            style: {
                color: "#000000"
            }, 

        }
      }
    ],
  
  xAxis: {
   tickInterval: 1,
  },
  legend: {
    enabled: true,
    layout: "horizontal",
    verticalAlign: "top",
    align: "left",
  	itemMarginBottom: 5,
  	//itemDistance: 2,
    padding: 1, 
    alignColumns: false,
  	//symbolPadding: 5,
    itemStyle: {
      fontWeight: "normal"
    }
  },
  series: [
    {
      color: "#6F6F6F",
      index: 0,
      type: "column",
      pointWidth: "15",
      legendIndex: 0
    },
    {
      color: "#DC440E",
      index: 0,
      type: "column",
      pointWidth: "15",
      legendIndex: 1
    },
	{   
	    yAxis: 1,
      color: "#FABD24",
      index: 1,
      type: "line",
      marker: {
        enabled: false
      }, 
      legendIndex: 3,
    },
  ],  
tooltip: {
  formatter() {
    if (this.series.userOptions.index === 0) { 
      const series = this.series.chart.series;
      let tooltip = "";
      let s = 0;
      
      series.forEach(series => {
        // Skip series with index 1 (the line series)
        if (series.userOptions.index !== 1) {
          series.setState('hover'); 
          series.points.forEach(point => {
            if (point.x === this.x) {
              tooltip += `<span style="color:${point.color}">\u25CF</span> ${point.series.name}:</span> <b> ${Highcharts.numberFormat(point.y, 0, ",", " ")} </b><br>`;
              s += point.y;
            }
          });
        }
      });
      
      return '<span style="font-size: 10px">Jahr: ' + this.x +
        '</span><br>' + tooltip + '<span style="opacity: 0">\u25CF</span> Total beider Basel: <b>' + Highcharts.numberFormat(s, 0, ",", " ") + '</b>';
    } else {
      return '<span style="font-size: 10px">Jahr: ' + this.x +
        '</span><br><span style="color:' + this.color + '">●</span> ' + this.series.name + ': <b>'
        + Highcharts.numberFormat(100 * this.y, 2, ",", " ") + '%</b><br/>';
    }
  }
}
};
}());