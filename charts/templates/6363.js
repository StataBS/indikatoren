(function(){
    return {
      subtitle: {
        useHTML: true
      },
      //use a separate series plus xAxis for each level of indentation
      series: [
        {xAxis: 0},
        {xAxis: 1},
        {xAxis: 2}
      ],
      xAxis: [
        {
          type: "category",
          tickLength: 0,
          labels: {
            align: "left",
            step: 1,
            rotation: 0,
            x: -240,
            formatter: function() {
              //get index of current value
              var index = this.axis.names.indexOf(this.value);
              //check if there's data at this index. if not, suppress axis label
              return this.axis.series[0].yData[index] ? this.value : "";
            },            
            style: {
                "color": "#000000",
                "fontSize": "10px"
            }            
          },  
        },
        {
          type: "category",
          tickLength: 0,
          labels: {
            align: "left",
            step: 1,
            rotation: 0,
            x: -220,
            formatter: function() {
              //get index of current value
              var index = this.axis.names.indexOf(this.value);
              //check if there's data at this index. if not, suppress axis label
              return this.axis.series[0].yData[index] ? this.value : "";
            },            
            style: {
                "color": "#000000",
                "fontSize": "10px"
            }            
          },  
        },    
        {
          type: "category",
          tickLength: 0,
          labels: {
            align: "left",
            step: 1,
            rotation: 0,
            x: -200,
            formatter: function() {
              //get index of current value
              var index = this.axis.names.indexOf(this.value);
              //check if there's data at this index. if not, suppress axis label
              return this.axis.series[0].yData[index] ? this.value : "";
            },            
            style: {
                "color": "#000000",
                "fontSize": "10px"
            }            
          },  
        },    
      ],
      "yAxis": {
    	//"max": 100,
        "labels": {
          "format": "{value:,.0f}"
        }    
      },
      "colors": [
        "#68AB2B", // green
        "#68AB2B", // green
        "#68AB2B", // green 
        "#68AB2B", // green 
        "#68AB2B", // green
        "#68AB2B", // green
        "#68AB2B", // green
        "#68AB2B", // green
        "#68AB2B", // green
        "#68AB2B", // green 
        "#68AB2B", // green 
        "#68AB2B"
      ],  
      "legend": {
        "enabled": false,
        "layout": "horizontal",
        "verticalAlign": "top",
        "align": "left",
       	//"y": 35,    
        "itemStyle": {
          "fontWeight": "normal"
        }
      },
        /*tooltip: {
        "pointFormat": '<span style="color:{series.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}  m²</b><br/>',
        "shared": false
      },*/
        tooltip: {  
          headerFormat: '',
          pointFormat: '<span style="color:{point.color}">● </span> <b> {point.y:.1f} m²</b><br/>'  
        },
      "chart": {     
         marginLeft:250,
        "type": "column",
        "inverted": true,
        "spacingBottom": 50
      },
      "plotOptions": {
        "series": {
          "pointWidth": 10,
          },
        "column": {
                "colorByPoint": true,
                grouping: false,
            } 
      },
};
}());