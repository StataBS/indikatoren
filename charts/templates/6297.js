(function(){
    return {
        chart: {
        	type: 'area'
        },
        xAxis: {
            //endOnTick: true,    
            //startOnTick: true,
            //showFirstLabel: true,
            //showLastLabel: true,
            tickInterval: 5 * 12 * 30 * 24 * 3600 * 1000,
            min: Date.UTC(1967, 12, 30),
            labels: {
                rotation: -45
            }
            //range: 50 * 12 * 30 * 24 * 3600 * 1000, //50 years
        },
        yAxis: { 
            max: 250000, 
            tickInterval: 50000,
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
        navigator: {
            enabled: false
        },
        scrollbar: {
            enabled: false
        },
    	rangeSelector: {
    	    enabled: false,
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

 