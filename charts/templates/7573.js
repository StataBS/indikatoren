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
      tooltip: {
        headerFormat: '<span style="font-size: 10px"> {point.key}</span><br/>',
        pointFormatter: function(){ 
            return '<span style="color:' + this.color + '">●</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat(100 * this.y, 1, ",", " ") + '%</b><br/>'; /* number of decimals adjusted from 2 to 1 */
        }
      }
    },
  ],  
  tooltip: {
    pointFormat: '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b><br/>', "footerFormat": 'Total beider Basel: <b>{point.total:,.0f}</b>',
    shared: true
  },
};
}());