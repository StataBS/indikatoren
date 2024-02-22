/* plotBands for weekends and 17.3.2020 when Corona-lockdown started in Switzerland */
var colorText = '#E7CEE2';
var colorLine = '#B375AB';
//var startDates = [Date.UTC(2022, 11, 30, 15, 0)];
//var endDates = [Date.UTC(2023, 0, 1, 9, 0)];
//var plotBands = [];

//creating weekend-plotbands
/*var i = 0;
while (i < 52) { 
    plotBands.push({
        color: '#eeeeee',
        from: parseFloat(startDates) + i * 7 * 24 * 3600 * 1000,
        to:   parseFloat(endDates) + i * 7 * 24 * 3600 * 1000
    });
    i++;
}
*/
var plotBands=[
  {
    color: colorText,
    from: Date.UTC(2023, 1, 25, 12, 0),
    to: Date.UTC(2023, 2, 1, 12, 0),
    label: {
      text: 'Basler Fasnacht',
      style: {
        color: colorLine,
        fontSize: '7pt',
      },
      textAlign: 'right',
      x: 2,//-5,
      y: 3,//15
      rotation: -90
    }
  },
  {
    color: colorText,
    from: Date.UTC(2023, 4, 17, 12, 0),
    to: Date.UTC(2023, 4, 20, 12, 0),
    label: {
      text: 'FCB vs. ACF Fiorentina<br>Fantasy Basel',
      style: {
        color: colorLine,
        fontSize: '7pt',
      },
      textAlign: 'right',
      x: -3,//-5,
      y: 3,//30
      rotation: -90
    }
  },
  /*{
    color: colorText,
    from: Date.UTC(2023, 4, 17, 16, 0),
    to: Date.UTC(2023, 4, 20, 8, 0),
    label: {
      text: 'FCB vs. ACF Fiorentina<br>Fantasy Basel',
      style: {
        color: colorLine,
        fontSize: '7pt',
      },
      textAlign: 'right',
      x: 5,//-5,
      y: 3,//40
      rotation: -90
    }
  },*/
  {
    color: colorText,
    from: Date.UTC(2023, 5, 11, 12, 0),
    to: Date.UTC(2023, 5, 18, 12, 0),
    label: {
      text: 'Art Basel',
      style: {
        color: colorLine,
        fontSize: '7pt',
      },
      textAlign: 'right',
      x: 3,//-5,
      y: 3,//15
      rotation: -90
    }
  },
  {
    color: colorText,
    from: Date.UTC(2023, 6, 13, 12, 0),
    to: Date.UTC(2023, 6, 22, 12, 0),
    label: {
      text: 'Basel Tattoo',
      style: {
        color: colorLine,
        fontSize: '7pt',
      },
      textAlign: 'right',
      x: 4,//-5,
      y: 3,//15
      rotation: -90
    }
  },
  {
    color: colorText,
    from: Date.UTC(2023, 9, 20, 12, 0),
    to: Date.UTC(2023, 9, 29, 12, 0),
    label: {
      text: 'Swiss Indoors',
      style: {
        color: colorLine,
        fontSize: '7pt',
      },
      textAlign: 'right',
      x: 3,//-5,
      y: 3,//15
      rotation: -90
    }
  },
  {
    color: colorText,
    from: Date.UTC(2023, 9, 27, 12, 0),
    to: Date.UTC(2023, 10, 14, 12, 0),
    label: {
      text: 'Herbstmesse',
      style: {
        color: colorLine,
        fontSize: '7pt',
      },
      textAlign: 'right',
      x: 9,//-5,
      y: 3,//30
      rotation: -90
    }
  },
  {
    color: '#C7BED2',
    from: Date.UTC(2023, 9, 27, 12, 0),
    to: Date.UTC(2023, 9, 29, 12, 0),
  },
  {
    color: colorText,
    from: Date.UTC(2023, 10, 17, 12, 0),
    to: Date.UTC(2023, 10, 22, 10, 0),
    label: {
      text: 'Igeho',
      style: {
        color: colorLine,
        fontSize: '7pt',
      },
      textAlign: 'right',
      x: 2,//-3,
      y: 3,//45
      rotation: -90
    }
  },
  {
    color: colorText,
    from: Date.UTC(2023, 10, 22, 16, 0),
    to: Date.UTC(2023, 11, 23, 12, 0),
    label: {
      text: 'Weihnachtsmarkt',
      style: {
        color: colorLine,
        fontSize: '7pt',
      },
      textAlign: 'right',
      x: 17,//-15,
      y: 3,//60,
      rotation: -90
    }
  }
];

//plotBands.push(...plotBands2);

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
        //stacking: 'normal',
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






