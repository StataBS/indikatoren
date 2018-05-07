(function(){
    return {
      series: [
        {
        }
      ], 
      data: {
		    seriesMapping: [
		        {x: 5, y: 9/*, Wert: 4*/}
        ],  
        parsed: function(columns){
          //define which wohnviertel to display
          var filterValue = 1;
          
          //define which column (zero-based index) should be filtered with above value 
          var filterColumnIndex = 7;
          //go backwards through the column with the values to filter (because we remove values at the end of the array and want to retain the index)
          for (var i = columns[0].length; i > 0; i--){
            if (columns[filterColumnIndex][i] != filterValue){
              //go through all columns and remove the value at the current position
              for (var j=0; j < columns.length; j++){
                columns[j].splice(i, 1);
              }
            }
          }
        }
      }, 
    };
}());

