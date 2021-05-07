(function () {
    return {
      chart: {
        marginLeft: 10,
        marginTop: 85,
        //width: 665,
        events: {
          load: function () {
            var chart = this;
            chart.series.forEach(function (series) {
              series.points.forEach(function (point) {
                var x = 0, y = 0;
                switch (point.name) {
                  
  
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
        useHTML: true,
        
        pointFormat: '<span style="color:{point.color}">\u25CF</span> <span style="font-size: 10px"> {point.name}</span><br/>' +
          '<span>An Verkehrsunfällen beteiligte {point.name}:<b>  {point.z}</b></span>' + 
          '<span style="font-size: 10px"><br/>(Pro Unfall sind Mehrfachnennungen möglich)</span>'
      },
      data: {
        seriesMapping: [
          //bubble series
          { x: 1, y: 2, z: 3, name: 0, color: 4 }
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
                case 'Autos':  val = 'rgb(176, 0, 0)'; break;
                case 'Motorräder': val = 'rgb(43, 0, 153)'; break;
                case 'Velos': val = 'rgb(250, 189, 36)'; break;
                case 'Trams': val = 'rgb(68, 171, 43)'; break;
                case 'Fuhrwerke': val = 'rgb(8, 161, 217)'; break;
                case 'Passanten': val = 'rgb(255, 128, 40)'; break;
              
  
  
                //default: val = 'black';
              }
            }
            return val;
          });
          columns.push(colors);
        }
      },
      xAxis: {
        opposite: true,
        categories: ['','Auto', 'Motorrad', 'Velo', 'Tram', 'Fuhrwerk','Passant',''],
        gridLineWidth: 0,
        lineWidth: 0,
       // max: 55,
        //min: -5,
        labels: {
         
        },
        plotLines: [{
            color: '#B9CFD7',
            dashStyle: 'line',
            width: 1,
            value: 1,
        },
        {
            color: '#B9CFD7',
            dashStyle: 'line',
            width: 1,
            value: 2,
        },
        {
            color: '#B9CFD7',
            dashStyle: 'line',
            width: 1,
            value: 3,
        },
        {
            color: '#B9CFD7',
            dashStyle: 'line',
            width: 1,
            value: 4,
        },
        {
            color: '#B9CFD7',
            dashStyle: 'line',
            width: 1,
            value: 5,
        },
        {
            color: '#B9CFD7',
            dashStyle: 'line',
            width: 1,
            value: 6,
        },
    ],
    
      },
      yAxis: {    
        opposite: true,
        categories: ['','Anderer Ort','Brücke','Platz','Gabelung','Kreuzung',''],
        useHTML: true,
        gridLineWidth: 0,
        //max: 50,
       // min: -150,
        labels: {
          format: '{value}'
        },
        plotLines: [{
            color: '#B9CFD7',
            dashStyle: 'line',
            width: 1,
            value: 1,
        },
        {
            color: '#B9CFD7',
            dashStyle: 'line',
            width: 1,
            value: 2,
        },
        {
            color: '#B9CFD7',
            dashStyle: 'line',
            width: 1,
            value: 3,
        },
        {
            color: '#B9CFD7',
            dashStyle: 'line',
            width: 1,
            value: 4,
        },
        {
            color: '#B9CFD7',
            dashStyle: 'line',
            width: 1,
            value: 5,
        },
    ],
        
      },
      plotOptions: {

        bubble: {
          marker: {
            lineWidth: 0.5,
            lineColor: "white" // inherit from series
        },
          dataLabels: {              
            //	x:-20,
            y: 0,  
            format: '{point.z}',
            allowOverlap: true,
            inside: true,
            //padding: 50,
            //borderRadius:100,
            //overflow: "none",
            //crop: false,
            style: {
             // fontSize: '10px',
              color: 'white',
              //fontWeight: 'normal',
              
              textOutline: false
            },
          },
        },
      },
    };
  }());