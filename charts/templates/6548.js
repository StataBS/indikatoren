(function(){
    return {
      yAxis: {
          min: 0, 
          max: null, 
          reversedStacks: false,
          labels: {
              x: -5
          }
      },
      xAxis: {
          tickInterval: 1,
          labels: {
            step: 1, 
            formatter: function(){
                return this.value;
            }
          }
      },
      "series": [
        {"color": "rgb(176, 0, 0)"},
        {"color": "rgb(255, 128, 40)"},
        {"color": "rgb(115, 186, 124)"},
        {"color": "rgb(180, 117, 171)"},
        {"color": "rgb(8, 161, 217)"},
        {"color": "rgb(131, 82, 46)"},
        {"color": "rgb(255, 232, 70)"},
        {"color": "rgb(60, 60, 60)"},
        {"color": "rgb(200, 200, 200)"}
      ],
      legend: {
        enabled: true, 
        reversed: true, 
        margin: 5, 
        padding: 5, 
        labelFormatter: function(){
          return this.name
            .replace("Vereinigtes ", "Vereinigtes<br/>")
            .replace("Vereinigte ", "Vereinigte<br/>");
        }
      },
     tooltip: {
         pointFormat: '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y} ({point.percentage:.1f}%)</b><br/>'
     },      
     "plotOptions": {
        "series": {
          "stacking": "normal"
        }
     }
    };
}());
 