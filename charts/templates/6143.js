(function(){
    return {
        chart: {
        	type: 'area'
        },
        xAxis: {
            endOnTick: true,    
            startOnTick: true,
            showFirstLabel: true,
            showLastLabel: true,
        },
        yAxis: { 
            showLastLabel: true,
            endOnTick: true,
            labels: {
            	format: '{value:,.0f}'
            }, 
            opposite: false
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
            selected: 2, 
            inputDateFormat: '%Y',
    		inputEditDateFormat: '%Y'
        }  
	};
}());

 