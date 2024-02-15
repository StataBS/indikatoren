/* plotBands for weekends and 17.3.2020 when Corona-lockdown started in Switzerland */
var colorText = '#E7CEE2';
var colorLine = '#B375AB';
var startDates = [Date.UTC(2023, 1, 1, 0, 0)];
var endDates = [Date.UTC(2023, 12, 31, 0, 0)];
var plotBands = [
  {
    color: colorText,
    from: Date.UTC(2023, 1, 26, 0, 0),
    to: Date.UTC(2023, 1, 27, 0, 0),
    label: {
      text: 'Basler Fasnacht',
      style: {
        color: colorLine,
        fontSize: '7pt',
      },
      textAlign: 'right',
      x: 0,//-5,
      y: 3,//15
      rotation: -90
    }
  },
  {
    color: colorText,
    from: Date.UTC(2023, 4, 18, 0, 0),
    to: Date.UTC(2023, 4, 20, 0, 0),
    label: {
      text: 'FC Basel vs. ACF Fiorentina',
      style: {
        color: colorLine,
        fontSize: '7pt',
      },
      textAlign: 'right',
      x: -5,//-5,
      y: 3,//30
      rotation: -90
    }
  },
  {
    color: colorText,
    from: Date.UTC(2023, 4, 18, 0, 0),
    to: Date.UTC(2023, 4, 20, 0, 0),
    label: {
      text: 'Fantasy Basel',
      style: {
        color: colorLine,
        fontSize: '7pt',
      },
      textAlign: 'right',
      x: 5,//-5,
      y: 3,//40
      rotation: -90
    }
  },
  {
    color: colorText,
    from: Date.UTC(2023, 5, 13, 0, 0),
    to: Date.UTC(2023, 5, 18, 0, 0),
    label: {
      text: 'Art Basel',
      style: {
        color: colorLine,
        fontSize: '7pt',
      },
      textAlign: 'right',
      x: 0,//-5,
      y: 3,//15
      rotation: -90
    }
  },
  {
    color: colorText,
    from: Date.UTC(2023, 6, 15, 0, 0),
    to: Date.UTC(2023, 6, 22, 0, 0),
    label: {
      text: 'Basel Tattoo',
      style: {
        color: colorLine,
        fontSize: '7pt',
      },
      textAlign: 'right',
      x: 0,//-5,
      y: 3,//15
      rotation: -90
    }
  },
  {
    color: colorText,
    from: Date.UTC(2023, 9, 28, 0, 0),
    to: Date.UTC(2023, 9, 28, 0, 0),
    label: {
      text: 'Swiss Indoors',
      style: {
        color: colorLine,
        fontSize: '7pt',
      },
      textAlign: 'right',
      x: 0,//-5,
      y: 3,//15
      rotation: -90
    }
  },
  {
    color: colorText,
    from: Date.UTC(2023, 10, 3, 0, 0),
    to: Date.UTC(2023, 10, 11, 0, 0),
    label: {
      text: 'Herbstmesse',
      style: {
        color: colorLine,
        fontSize: '7pt',
      },
      textAlign: 'right',
      x: 0,//-5,
      y: 3,//30
      rotation: -90
    }
  },
  {
    color: colorText,
    from: Date.UTC(2023, 10, 18, 0, 0),
    to: Date.UTC(2023, 10, 18, 0, 0),
    label: {
      text: 'Igeho',
      style: {
        color: colorLine,
        fontSize: '7pt',
      },
      textAlign: 'right',
      x: 0,//-3,
      y: 3,//45
      rotation: -90
    }
  },
  {
    color: colorText,
    from: Date.UTC(2023, 10, 25, 0, 0),
    to: Date.UTC(2023, 11, 16, 0, 0),
    label: {
      text: 'Weihnachtsmarkt',
      style: {
        color: colorLine,
        fontSize: '7pt',
      },
      textAlign: 'right',
      x: 0,//-15,
      y: 3,//60,
      rotation: -90
    }
  }
];
//creating weekend-plotbands
/*var i = 0;
while (i < 52) {
    plotBands.push({
        color: '#eeeeee',
        from: parseFloat(startDates) + i * 7 * 24 * 3600 * 1000,
        to: parseFloat(endDates) + i * 7 * 24 * 3600 * 1000
    });
    i++;
}*/

(function () {
  return {
    "plotOptions": {
      column: {
        stacking: 'normal'
      },
      "series": {
        pointPadding: 0,
        borderWidth: 0,
        //pointWidth: 10, 
        "dataLabels": {
          "style": {
            "fontSize": "10px"
          }
        }
      },
    },
    "xAxis": {
      plotBands: plotBands,
      max: Date.UTC(2023, 11, 31, 0, 0),
      //min: Date.parse('2023-10-01')
    },
    "yAxis": {
      reversedStacks: false,
      tickAmount: 6,
      max: 10000,
    },
    navigator: {
      enabled: true,
      top: 330,
      series: {
        //type: 'column',
        pointRange: null
      },
      xAxis: {
        labels: {
          y: 15
        }
      }
    },
    "series": [
      {
        color: 'rgb(176, 0, 0)',
        showInNavigator: true,
      },
      {
        color: 'rgb(105, 146, 155)',
        showInNavigator: true,
      }
    ],
    "legend": {
      "enabled": true,
      "layout": "horizontal",
      "verticalAlign": "top",
      "align": "left",
      "itemWidth": 100,
      "itemMarginBottom": 5,
      //"y": 35,    
      "itemStyle": {
        "fontWeight": "normal"
      }
    },
    "chart": {
      "type": "column",
      zoomType: 'x'
    },
    tooltip: {
      //headerFormat: '<span style="font-size: 10px"> {point.key}</span><br/>',
      pointFormat: '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:,.0f}</b><br/>',
      footerFormat: '<span style="color: black">\u25CF</span> Total: <b>{point.total:,.0f}</b>'
    }

  };
}());






