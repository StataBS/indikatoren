(function(){
  return {
    "plotOptions": {
      series: {
          pointPadding: 0,
          borderWidth: 0,
        
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
      type: "category",
      "labels": {
        "formatter": function() {
          return this.value.replace("BS", "<b>BS<br/>");
  },
              "rotation": 0,
        }
    },
    "legend": {
      "enabled": true,
      "layout": "horizontal",
      "verticalAlign": "top",
      "align": "left",
      "itemStyle": {
        "fontWeight": "normal", 
      }
    },
    "series": [
      { 
        "index": 0,
        "type": "column",
        borderWidth: 0,
        legendIndex: 1,
        color: "#008AC3"
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
      },

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
      
         "chart": {     
          "type": "column",
          "inverted": false,
          "spacingTop": 5,
          width: 665,
        }
      };
      
}());


