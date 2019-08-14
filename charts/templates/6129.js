(function(){
  return {
    "plotOptions": {
      series: {
          stickyTracking: false
       }
    },
    "yAxis": {
      "min": 0,
      title: {
          text: null,
          "color": "#000000",
          "fontSize": null
      },
      "labels": {
        "format": "{value:,.0f}",
         style:{
            color: "black",
         },
      },

    },
    "xAxis": {
     "tickInterval": 1,
      "labels": {
            step: 1,
              "rotation": -90,
        }
    },
    "legend": {
      "enabled": true,
      "layout": "horizontal",
      "verticalAlign": "top",
      "align": "left",
     // itemWidth: 140,
      "itemMarginBottom": 5,
      "itemStyle": {
        "fontWeight": "normal", 
        textOverflow: 'nowrap',
        whiteSpace: "nowrap"
      }
    },
    "series": [
      { 
        linkedTo: 'fake',
        "colorByPoint": true,
        "index": 0,
        "type": "column",
        pointWidth: 10, 
        pointPlacement: 0.15,
        borderWidth: 0,
        legendIndex: 1,
        "tooltip": {
          "pointFormat": '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b><br/>',
         }
      },
      {
        "legendColor": "#B00000",
        "color": "#B00000",
        "index": 1,
        "type": "line",
         "marker": {
          "enabled": false
        },
        legendIndex: 2,
        "tooltip": {
          snap: 0,
          "headerFormat": '',
          "pointFormat": '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b><br/>',
        },
      },
      {
        name: 'Ressourcenindex nach Kanton',
        id: 'fake',
        color: '#A8C3CA',
        type: 'column'
      }
      ],
      
      "colors": [
        "#A8C3CA",
        "#A8C3CA",
        "#A8C3CA",
        "#689199",
        "#A8C3CA",
        "#A8C3CA",
        "#A8C3CA",
        "#A8C3CA",
        "#A8C3CA",
        "#A8C3CA",        
        "#A8C3CA",
        "#A8C3CA",
        "#A8C3CA",
        "#A8C3CA",
        "#A8C3CA",
        "#A8C3CA",
        "#A8C3CA",
        "#A8C3CA",
        "#A8C3CA",
        "#A8C3CA",
        "#A8C3CA", 
        "#A8C3CA",
        "#A8C3CA",
        "#A8C3CA",
        "#A8C3CA",
        "#A8C3CA"
      ],
      
     "tooltip": {
          //"shared": true
         },
    "chart": {
      "alignTicks": false
    }
  };
}());


