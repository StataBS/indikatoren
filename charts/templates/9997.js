(function(){
    return {
      series: [
        {
        }
      ], 
      data: {
		    seriesMapping: [
		        {x: 1, y: 2, z: 3, name: 0, color: 4}
        ],  
        parsed: function(columns){
          //define colors by entry in first column
          var colors = columns[0].map(function(val, i, arr){
            //column name
            val = (i == 0) ? 'color' : 
              //column value
              (val == 'Schweiz') ? 'red': 'blue';
            return val;
          });
          columns.push(colors);
        }
      }, 
      xAxis:{
        //make sure dataLabels are not cut off
        maxPadding: 0.2, 
        labels: {
          format: '{value}%'
        }
      },
    };
}());

