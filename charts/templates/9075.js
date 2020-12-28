/*global $*/
(function(){
    
  return {
    plotOptions: {
      pie: {
        size: 180,
      },  
      series: {
          allowPointSelect: false,
          point: {
              events: {
                  legendItemClick: function (event) {
                      event.preventDefault();

                  }
              }
          }
      }
  },
      
    legend:{
      layout: "horizontal",
      verticalAlign: "top",
      align: "left",
      itemDistance: 2,
      style: {
  fontSize: "12px"
  }
    },
    data: {
      seriesMapping: [
        {
          x: 0, y: 2
        },
        {
          x: 0, y: 1
        } 
      ]
  },
    "series": [{
          showInLegend: false,
          type: 'pie',
          innerSize: '100%',
        borderWidth: 0,
          colors: [
            '#D7E8D2', 
            '#F2F2F2',
            '#C9D6DB',
         ],
         dataLabels: {
          enabled: true,
                format: '{point.name}',
                distance: 10,
                connectorWidth: 0,
                style: {
                    color: 'black',
                    textOutline: "0px black", 
                    fontWeight: "normal", 
                    fontSize: "10px"
                }
      }
         
    }, {
          showInLegend: false,
          type: 'pie',
          innerSize: '40%',

        borderWidth: 0,
           colors: [
            '#FFDA80', 
            '#CD9C00',
            '#45381D',
          ],
          dataLabels: {
            enabled: true,
                  format: '{point.percentage:.0f}%',
                  distance: -20,
                  style: {
                      color: 'contrast',
                      textOutline: "0px black", 
                      fontWeight: "normal", 
                      fontSize: "10px"
                  }
        }
      }],
      
    "tooltip": {
      "pointFormat": '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y} </b> ({point.percentage:.1f}%)<br/><br/>',
      "shared": false
    }   
  };
}());
