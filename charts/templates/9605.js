/*global $*/
(function () {
  return {
    plotOptions: {
      series: {
        allowPointSelect: false,
        point: {
          events: {
            legendItemClick: function (event) {
              event.preventDefault();
              /*
              var id = this.id,
                  data = this.series.chart.series[0].data;
              $.each(data, function (i, point) {
                 
                  if (point.parentId == id) {
                      if(point.visible)
                          point.setVisible(false);
                      else
                          point.setVisible(true);
                  }
              });
              */
            }
          }
        }
      }
    },
    legend: {
      layout: "horizontal",
      verticalAlign: "top",
      align: "left",
      itemDistance: 10,
      style: {
        fontSize: "12px"
      }
    },
    "series": [{
      data: {
        series: [
          {
            ParentId: '1',
          }, {
            ParentId: '2',
          }]
      },
      dataLabels: {
        enabled: true,
        format: '{point.percentage:.1f}%',
        distance: -57,
        style: {
          color: 'black',
          textOutline: "0px black",
          fontWeight: "normal",
          fontSize: "12px"
        }
      },
      showInLegend: false,
      type: 'pie',
      size: '100%',
      innerSize: '40%',
      center: [180, 120],
      borderWidth: 2,
      colors: [
        "#A0BEC8",
        "#FFBB58",
      ],
    }, {
      data: {
        series: [
          {
            id: '1',
          }, {
            id: '2',
          }]
      },
      dataLabels: {
        enabled: true,
        format: '{point.percentage:.1f}%',
        distance: -20,
        style: {
          color: 'black',
          textOutline: "0px black",
          fontWeight: "normal",
          fontSize: "12px"
        }
      },
      showInLegend: true,
      type: 'pie',
      innerSize: '70%',
      center: [180, 120],
      borderWidth: 2,
      colors: [
        "#008ac3",
        "#FF8028",
      ],
    }],
    "tooltip": {
      "pointFormat": '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f} </b> Tonnen ({point.percentage:.1f}%)<br/><br/>',
      "shared": false,
      useHTML: false
    },
    labels: {
      items: [{
        html: 'Aussen: 2024<br/>Innen: &nbsp;&nbsp;&nbsp;2014-2023',
        style: {
          left: '300px',
          top: '250px'
        }
      }]
    },
  };
}());
