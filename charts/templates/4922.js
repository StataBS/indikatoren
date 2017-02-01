(function(){
    return {
  "plotOptions": {
    "series": {      
      "dataLabels": {
        "style": {
          "fontSize": "10px"
        }
      }
    },
  },
  "xAxis": {
    "tickInterval": 4,
	"type": "year"    
  },
  "yAxis": {
    "labels": {
      "formatter": function(){
        return Highcharts.numberFormat((this.value*100),0)+'%';                
      },      
    }    
  },
  "series": [
    {
      "color": "#FABD24"       
    },
    {
      "color": "#923F8D"
    }
  ],
  "legend": {
    "enabled": true,
    "layout": "horizontal",
    "verticalAlign": "top",
    "align": "left",
    "x": 118,
		"y": 35,    
    "itemStyle": {
      "fontWeight": "normal"
    }
  },
  "tooltip": {
    "pointFormatter": function(){
      return '<span style="color:' + this.series.color + '">\u25CF</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat((this.y*100),1) + '%</b><br/>'
    },   
    "shared": false
  },  
  "chart": {      
    "renderTo": 'container-I.17.3.0003',
    "marginBottom": 65,
    "marginTop": 75,
    "type": "column",
  }
	}
}());
