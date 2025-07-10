(function(){
    return {
      "data": {
        //seriesMapping necessary for charts with error bars. 
    "seriesMapping": [
      {
        "x": 0
      },
      {
        "x": 0
      },
      {
        "x": 0
      },
      {
        "x": 0
      },
      {
        "x": 0
      }
    ]  
  },
   title: {
      useHTML: true
    },
    subtitle: {
      useHTML: true
    },
   plotOptions: {
       /* series: {
          pointPadding: 0,
          borderWidth: 0,
        },*/
        line: {
          index: 4,
          visible: true,
          yAxis: 1,
        },
        column: {
          pointPadding: 0,
          borderWidth: 0,
          index: 0,
          visible: true,
          yAxis: 0,
        }
   },
  "xAxis": {
    "type": "category",
    "labels": {
      "rotation": 0 
    } 
  },
  "yAxis": [{
    min: 0,
    max: 24,
    title: {
      text: null,
    },
    
    labels: {
      format: "{value:,.0f}",
      style: {
        color: "black",
      },
    },
    plotLines: [{
      color: '#B9CFD7',
      value: 0,
      width: 2
    }]
  },
  {
    opposite: true,
    min: 0,
    max: 100,
    title: {
      text: null
    },
    labels: {
      format: "{value:,.0f}%",
      style: {
        color: "black",
      },
    },
    plotLines: [{
      color: '#B9CFD7',
      value: 0,
      width: 2
    }]
  }  
],
 "series": [
  {
    "index": 0,
    color: "#FFDA80",
    "tooltip": {
      "pointFormatter": function () {
        return '<span style="color:' + this.color + '">\u25CF</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat((this.y), 1) + ' Fr./m²</b>';
      }
    }
  },
  {
    "index": 1,
    "type": "errorbar",
    "tooltip": {
      "pointFormatter": function () {
        return ' (95%-Vertrauensintervall: <b>' + Highcharts.numberFormat((this.low), 1) + '</b> - <b>' + Highcharts.numberFormat((this.high), 1) + ' Fr./m²</b>)';
      },
    }
  },
  {
    "index": 2,
    color: "#A0BEC8",
    "tooltip": {
      "pointFormatter": function () {
        return '<br/>' + '<span style="color:' + this.color + '">\u25CF</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat((this.y), 1) + ' Fr./m²</b>';
      }
    }

  },
  {
    "index": 3,
    "type": "errorbar",
    "tooltip": {
      "pointFormatter": function () {
        return ' (95%-Vertrauensintervall: <b>' + Highcharts.numberFormat((this.low), 1) + '</b> - <b>' + Highcharts.numberFormat((this.high), 1) + ' Fr./m²</b>)';
      }
    }
  }, 
  {
    "index": 4,
    color: "black",
    "type": "line",
     "tooltip": {
      "pointFormatter": function () {
        return '<br/>' + '<span style="color:' + this.color + '">\u25CF</span> ' + this.series.name + ': <b>' + Highcharts.numberFormat((this.y), 1) + '%</b>';
      }
    },
    marker: {
      radius:6
    }
  }, 
],
  "legend": {
    "enabled": true,
    "layout": "horizontal",
    "verticalAlign": "top",
    "align": "left",
	  itemDistance: 3,
	  symbolPadding: 3,
	  padding: 0,
    "itemStyle": {
      "fontWeight": "normal"
    }
  },
   tooltip: {
    //"pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.1f} CHF/m²</b><br/>',
    "shared": true
  },
  "chart": {      
    "type": "column",
    "inverted": false,
    "spacingBottom": 50
  }
}
}());