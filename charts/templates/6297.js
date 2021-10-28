(function(){
    return {
        chart: {
        	type: 'area', 
        	spacing: [6,0,3,2],
        },
        xAxis: {
            type: 'category',
            tickInterval: 1,
           //type: 'datetime',
           // tickInterval: 5 * 12 * 30 * 24 * 3600 * 1000,
           // min: Date.UTC(1967, 12, 30),
            showLastLabel: true,
            labels: {
                rotation: -45,    
              "formatter": function() {
                 return this.value.split("-",1);
            },           
                style: {
                    fontSize: '10px',
                },
            }
            //range: 50 * 12 * 30 * 24 * 3600 * 1000, //50 years
        },
        yAxis: { 
            max: 250000, 
            tickInterval: 50000,
            showLastLabel: true,
            endOnTick: true,
            labels: {
            	format: '{value:,.0f}', 
            	style: {
            	    fontSize: '10px',
            	},
            }, 
            opposite: false
        },
        data: {
            parsed: function(columns){
              var pointsToKeep=49;
              //keep only the last n elements in the arrays but keep the column title
              columns.forEach(function(v, i, a){
                v.splice(1, v.length-pointsToKeep-1);
              });
            }
          },
        plotOptions: {
            series: {
                marker: {
                    enabled: false, //null,
                    radius: 4
                }
            }
        },
	};
}());

 