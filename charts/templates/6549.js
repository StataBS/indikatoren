(function () {
  return {
    chart: {
      marginRight: 16,
      //width: 665,
      events: {
        load: function () {
          var chart = this;
          chart.series.forEach(function (series) {
            series.points.forEach(function (point) {
              var x = 0, y = 0;
              switch (point.name) {
                case 'Schweiz': case 'Schweiz': x = 0; y = -3; break; //ent-kommentieren falls gewünscht
                case 'DE': case 'Deutschland': x = 0; y = -3; break;
                case 'US': case 'USA': x = 30; y = 50; break;
                case 'GB': case 'UK': x = 25; y = 35; break;
                case 'FR': case 'Frankreich': x = 15; y = -3; break;
                case 'IT': case 'Italien': x = 25; y = 10; break;
                case 'ES': case 'Spanien': x = -30; y = 15; break;
                case 'NL': case 'Niederlande': x = -15; y = -10; break;
                case 'IN': case 'Indien': x = -15; y = -5; break;
                case 'CN': case 'VR China': x = 0; y = 35; break;

              }
              point.dataLabel.translate(point.dataLabel.x + x, point.dataLabel.y + y);
            });
          });
        }
      }
    },
    series: [
      {
      }
    ],
    tooltip: {
      useHTML: false,
      pointFormat: '<span style="color:{point.color}">\u25CF</span> <span style="font-size: 10px"> {point.name}</span><br/>' +
        'Anteile am Übernachtungsvolumen 2021:<b> {point.x:,.1f}%</b><br/>' +
        'Veränderung 2021 gegenüber dem Mittelwert 2010-2014:<b> {point.y}%</b><br/>' +
        'Wachstumsbeitrag:<b> {point.z}%</b>'
    },
    data: {
      seriesMapping: [
        //bubble series
        { x: 2, y: 1, z: 3, name: 0, color: 4 }
      ],
      parsed: function (columns) {
        //define colors by entry in first column
        var colors = columns[0].map(function (val, i, arr) {
          //column name
          if (i == 0) {
            val = 'color';
          }
          //column value
          else {
            switch (val) {
              case 'CH': case 'Schweiz': val = 'rgb(176, 0, 0)'; break;
              case 'DE': case 'Deutschland': val = 'rgb(255, 128, 40)'; break;
              case 'US': case 'USA': val = 'rgb(115, 186, 124)'; break;
              case 'GB': case 'UK': val = 'rgb(180, 117, 171)'; break;
              case 'FR': case 'Frankreich': val = 'rgb(8, 161, 217)'; break;
              case 'IT': case 'Italien': val = 'rgb(131, 82, 46)'; break;
              case 'ES': case 'Spanien': val = 'rgb(255, 232, 70)'; break;
              case 'NL': case 'Niederlande': val = 'rgb(60, 60, 60)'; break;
              case 'IN': case 'Indien': val = 'rgb(0, 122, 47)'; break;
              case 'CN': case 'VR China': val = 'rgb(103, 39, 115)'; break;

              /*case 'CH': val = 'rgb(176, 0, 0)'; break;
              case 'DE': val = 'rgb(255, 128, 40)'; break;
              case 'US': val = 'rgb(115, 186, 124)'; break;
              case 'GB': val = 'rgb(180, 117, 171)'; break;
              case 'FR': val = 'rgb(8, 161, 217)'; break;
              case 'IT': val = 'rgb(131, 82, 46)'; break;
              case 'ES': val = 'rgb(255, 232, 70)'; break;
              case 'NL': val = 'rgb(60, 60, 60)'; break;
              case 'CN': val = 'rgb(103, 39, 115)'; break;
              case 'IN': val = 'rgb(0, 122, 47)'; break;*/


              //default: val = 'black';
            }
          }
          return val;
        });
        columns.push(colors);
      }
    },
    xAxis: {
      tickInterval: 5,
      max: 55,
      min: -5,
      labels: {
        format: '{value}%'
      },
      title: {
        text: 'Anteile am Übernachtungsvolumen 2021'
      }
    },
    yAxis: {
      useHTML: true,
      max: 50,
      min: -150,
      labels: {
        format: '{value}%'
      },
      title: {
        text: 'Veränderung Logiernächte 2021 gegenüber Ø 2010<span>-</span>2014'
      }
    },
    plotOptions: {
      bubble: {
        label: {
          enabled: true
        },
        dataLabels: {
            formatter: function () {
              return this.point.name.replace('Niederlande', 'Nieder-<br>lande');
              //only return last word
              //return this.name.split(" ").slice(-1);
              //return Highcharts.numberFormat(this.point.y, 0, ",", " ") // I dont't want to display a number but a character
            },
            
          //	x:-20,
          y: -5,

          allowOverlap: true,
          //padding: 50,
          //borderRadius:100,
          //overflow: "none",
          //crop: false,
          style: {
            fontSize: '10px',
            color: 'black',
            fontWeight: 'normal',
            textShadow: 'none',
          },
        },
      },
    },
  };
}());