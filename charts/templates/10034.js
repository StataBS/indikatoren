(function(){
    return {
  "plotOptions": {
    "series": {
      "pointWidth": 25,
      "dataLabels": {
        "style": {
          "fontSize": 10
        }
      },
      "stacking": "normal"
    }
  },
  "xAxis": {
    "type": "category"    
  },  
  "yAxis": {
    "labels": {
      "format": "{value:,.0f}"
    },
    "reversedStacks": false
  },
  "tooltip": {
    "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y}</b><br/>',
    "shared": false
  },  
  "legend": {
    "layout": "horizontal",
    itemDistance: 18,
    "verticalAlign": "top",
    "itemMarginBottom": 5,
    "align": "left",
    "itemStyle": {
      "fontWeight": "normal"
    }
  },
  "series": [
   {"color": "#68AB2B ",
    //"legendIndex": 2  
},
    {
      "color": "#662673",
      //"legendIndex": 1  
    }        
  ],
  "chart": {    
    "type": "column"
  }
	}
}());

/*
(function () {
  return {
    title: {
      useHTML: true
    },
    plotOptions: {
      series: {
        borderWidth: 0,
        pointWidth: 30,
        dataLabels: {
          style: {
            fontSize: "10px"
          }
        },
        stacking: "true"
      }
    },
    xAxis: {
      type: "category",
    },
    yAxis: {
        "labels": {
          "format": "{value:,.0f}%",
        }
      },
    series: 
      {
        color: "#2F656B",
        type: "column",
        tooltip: {
          pointFormat: '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b> Tonnen ({point.percentage:.1f}%)<br/>', "footerFormat": 'Total CO<sub>2</sub> Emissionen: <b>{point.total:,.0f}</b> Tonnen',
        }
      }, 
      {
        color: "#8B2223",
        type: "column",
        tooltip: {
          pointFormat: '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b> Tonnen ({point.percentage:.1f}%)<br/>', "footerFormat": 'Total CO<sub>2</sub> Emissionen: <b>{point.total:,.0f}</b> Tonnen',
        }
      
    },

    legend: {
      useHTML: true,
      enabled: true,
      layout: "horizontal",
      verticalAlign: "top",
      itemMarginBottom: 5,
      align: "left",
      itemWidth: 130,
      width: 300,
      itemStyle: {
        fontWeight: "normal",
        textOverflow: "none",
        whiteSpace: "nowrap"

      }
    },
    chart: {
      //"marginBottom": 75,
      //"marginTop": 75,
      type: "column"
    }
  };
}());
