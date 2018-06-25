/*
	global Highcharts
*/
(function() {
	return {
		"series": [{
				"color": "#923F8D"
			},
			{
				"visible": false
			}
		],
		yAxis: {
			labels: {
                formatter: function(){
                    return Highcharts.numberFormat((this.value*100), 1)+'%';                
                },			
			},
		},
		"data": {
		    "parsed": function (columns) {
		    	
		    	//copy columns to the end, then remove the first 5
		    	columns.push(columns[3]);
		    	columns.push(columns[1]);
		    	columns.push(columns[2]);
		    	columns.splice(0,5);
			}
		}
	}
}());

//Colors of StatA Bereiche: violett3 #923F8D, gruen3 #68AB2B, blau3 #689199