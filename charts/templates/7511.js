(function(){
    return {
  "plotOptions": {
    "series": {  
       pointPadding: 0,
      "dataLabels": {
        "style": {
          "fontSize": "10px"
        }
      }
    },
  },
  "xAxis": {
    "tickInterval": 1
  },
        "yAxis": {
        	"labels": {
        		"format": "{value:,.0f}",
        		"formatter": function(){
                return Highcharts.numberFormat((this.value*1),0); 
              },
      	  }
        },	

  "series": [
    {
      "color": "rgb(115,186,124)"       
    },
    {
      "color": "rgb(0,122,47)"
    }
  ],
  "legend": {
    "enabled": true,
    "layout": "horizontal",
    "verticalAlign": "top",
    "align": "left",
    "itemStyle": {
      "fontWeight": "normal"
    }
  },
 tooltip: {
    pointFormat: '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}</b><br/>',
    shared: false
  },     
       "chart": {      
    "renderTo": 'container-I.05.1.0001',
    "type": "column",
    "marginBottom": 80,
  }
	}
}());
