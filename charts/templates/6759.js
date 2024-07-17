(function(){
    return {
      series: [
        {
        }
      ], 
      data: {
		    seriesMapping: [
          {x: 5, Wohnviertel: 8, y: 9, Wert: 4, Jahr: 3}
        ],  
        parsed: function(columns){
          //define which wohnviertel to display
          var filterValue = 30;
          
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
        },
      },
      /*tooltip: {
          padding: 0,
          useHTML: true,
          //fix html xAxis labels rendered above tooltip, see http://jsfiddle.net/g2j344z4/19/ 
          //replace "&nbsp;" by "\u00A0" to control line breaks in SVG without using html
          formatter: function() {
              return "" + 
              '<div class="tev" style= "display: block; background-color: #fff; padding:9px; margin-left: 1px; margin-top: 1px;">'+ 
                '<span style="font-size: 10px">' + this.key.replace(/&nbsp;/g, "\u00A0").replace(/-/g, "") + '</span><br/>'+
                '<span style="color:' + this.point.color + '">\u25CF</span> ' + this.point.Wohnviertel + ': Rang' + ' <b>' + this.point.y + '</b><br/>' + 
              '</div>';
          }
      },  */    
    };
}());

