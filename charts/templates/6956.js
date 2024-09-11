/* 
global Highcharts
*/

(function(){
    return {
      data: {
        parsed: function(columns){ 
          //define which wohnviertel to display
          var filterValue = this.chartOptions.customFunctions.filter;
          
          //create a new array that contains data for BS
          var bsAnteil=[];
          var bsAnzahl=[];
          var bsLabels=[];
          
          //define which column (zero-based index) should be filtered 
          var filterColumnIndex = 6;
          var anteilColumnIndex=5;
          var anzahlColumnIndex=3;
          var wohnviertelNameColumnIndex=7;
          var bsValue=99;
          //go backwards through the column with the values to filter (because we remove values at the end of the array and want to retain the index)
          for (var i = columns[0].length; i > 0; i--){
            if (columns[filterColumnIndex][i] != filterValue){
              //add data to bs array if wohnviertel_id=99
              if (columns[filterColumnIndex][i] == bsValue){
                bsAnteil.unshift(columns[anteilColumnIndex][i]);
                bsAnzahl.unshift(columns[anzahlColumnIndex][i]);
                bsLabels.unshift("Kanton Basel-Stadt");
              }
              
              //go through all columns and remove the value at the current position
              for (var j=0; j < columns.length; j++){
                columns[j].splice(i, 1);
              }
            }
          }
          //add bs data and labels
          bsAnteil.unshift("Kanton Basel-Stadt");
          columns.push(bsAnteil);
          bsAnzahl.unshift("Kanton Basel-Stadt");
          columns.push(bsAnzahl);
          bsLabels.unshift("Kanton Basel-Stadt");
          columns.push(bsLabels);
          
          //replace measure column header for a nice legend item label
          columns[anteilColumnIndex][0]=columns[wohnviertelNameColumnIndex][1];
          columns[anzahlColumnIndex][0]=columns[wohnviertelNameColumnIndex][1];
        },
        seriesMapping: [
          {x: 2, Wohnviertel: 10, y: 8, Anzahl: 9,},
          {x: 2, Wohnviertel: 7, y: 5, Anzahl: 3},
        ]
      },
      tooltip: {
        pointFormatter: function(){
          return '<span style="color:' + this.color + '">●</span> ' + this.Wohnviertel + ': <b> ' + Highcharts.numberFormat(this.Anzahl, 0, ",", " ") + "</b> (" +Highcharts.numberFormat(this.y*100, 1, ",", " ") + "%)";
        },
      },
    yAxis: {
      tickInterval: 0.1,
      //tickAmount: 6,
      max: 0.5,
      labels: {
        formatter: function(){
          return this.value*100 + "%";
        },

        style: {
          color: "#000000",
        },
      }, 
      title: "",
    },
    xAxis: {
        reversed: false,
      },
    legend: {
      enabled: true,
      layout: 'horizontal',
      verticalAlign: 'top',
      align: 'left',
      reversed: true,
    },
    series: [
      {
        color: "lightgray",
      },
      {
        color: "rgb(37, 99, 112)",
      },
    ],
      chart: {
        type: "bar", 
        marginRight: 15,
      }, 
     customFunctions: {
       filter: 1
     }
    };
}());