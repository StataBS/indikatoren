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
  data: {
    seriesMapping: 
    [
      {
        x: 1, y: 2
      },
      {
        //2nd series: use y values from column 3
        y: 3
      }
    ]
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
  series: 
  [
    {
      showInLegend: false,
      type: 'pie',
      innerSize: '100%',
      borderWidth: 2,
      colors: 
      [
        '#D3E2E4', 
        '#B00000',
        '#689199',
        '#DC440E',
        '#083038'
      ],
      dataLabels: {
        overflow: "allow",
        crop: false,
        enabled: true,
        format: '{point.name}',
        distance: 5,
        connectorWidth: 0,
        style: {
          color: 'black',
          textOutline: "0px black", 
          fontWeight: "normal", 
          fontSize: "10px"
        }
      }
    }, 
    {
      showInLegend: false,
      type: 'pie',
      innerSize: '40%',
      borderWidth: 0,
      colors: [
        '#D3E2E4', 
        '#B00000',
        '#689199',
        '#DC440E',
        '#083038'
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
