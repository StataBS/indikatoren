(function(){
    return {
        chart: {
            marginTop:70,
        	type: 'area'
        },
        xAxis: {
            endOnTick: true,    
            startOnTick: true,
            showFirstLabel: true,
            showLastLabel: true
        },
        yAxis: { 
            showLastLabel: true,
            endOnTick: true,
            labels: {
            	format: '{value:,.0f}'
            }, 
            opposite: false
        },
        tooltip: {
            xDateFormat: '%A, %e. %b. %Y',
        },
        plotOptions: {
            series: {
                marker: {
                    enabled: false, //null,
                    radius: 4
                }
            }
        },
    	rangeSelector: {
    		buttons: 
    			[
        			{
                      count: 10,
                      type: 'year',
                      text: '10 J'
    	            }, 
        			{
                      count: 20,
                      type: 'year',
                      text: '20 J'
    	            }, 
    	            {
                      count: 50,
                      type: 'year',
                      text: '50 J'
    	            }, 
    	            {
                      count: 100,
                      type: 'year',
                      text: '100 J'
    	            },
    	            {
                      type: 'all',
                      text: 'Alle J'
    	            }
                ],
            buttonSpacing: 15,                
            inputEnabled: false,
            selected: 1, 
            inputDateFormat: '%Y',
    		inputEditDateFormat: '%Y'
        }  
	};
}());

 