/* 
    global $
*/

(function(){
    return {
      "data":{
      	"switchRowsAndColumns": true
      },
      "series": [ 
          {
              innerSize: '20%',
              id: 0
          }, 
          {
              innerSize: '60%',
              linkedTo: ':previous',
              showInLegend: false
          }
      ],
    	"tooltip": {
    		"pointFormat": '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:.2f} km² ({point.percentage:.1f}%)</b><br/>',
            "shared": false
      },
      plotOptions: {
        pie: {
            borderWidth: 1,
            colors: [
               '#50B432', 
               '#ED561B', 
               '#DDDF00', 
               '#24CBE5', 
               '#64E572', 
               '#FF9655', 
               '#FFF263', 
               '#6AF9C4'
             ]
	      }
      },
     chart: {
    	"width": 485,
        "height": 415,
        //width: 1283,
        //height: 411,
        events:{
              load: function() {
                  this.credits.element.onclick = function() {};
        
                // Remove all pie slices with same color when clicking onto legend item
                // see https://www.bountysource.com/issues/1055141-linkedto-on-pie-chart-s-data-points-for-e-g-setvisible
                // or http://jsfiddle.net/highcharts/u7FQS/278/
                  
                var chart = this;
                $(chart.series[0].data).each(function(i, e) {
                    e.legendItem.on('click', function(event) {
                        var legendItem=e.name;
                        
                        event.stopPropagation();
                        
                        $(chart.series).each(function(j,f){
                               $(this.data).each(function(k,z){
                                   if(z.name==legendItem)
                                   {
                                       if(z.visible)
                                       {
                                           z.setVisible(false);
                                       }
                                       else
                                       {
                                           z.setVisible(true);
                                       }
                                   }
                               });
                        });
                    });
                    e.legendItem.on('mouseover', function(event) {
                        var legendItem=e.name;
                        
                        event.stopPropagation();
                        
                        $(chart.series).each(function(j,f){
                               $(this.data).each(function(k,z){
                                   if(z.name==legendItem)
                                   {
                                       z.setState('hover');
                                   }
                               });
                        });
                    });
                    e.legendItem.on('mouseout', function(event) {
                        var legendItem=e.name;
                        
                        event.stopPropagation();
                        
                        $(chart.series).each(function(j,f){    
                               $(this.data).each(function(k,z){
                                   if(z.name==legendItem)
                                   {
                                       z.setState('');
                                   }
                               });
                        });
                    });
                    
                });
        
                

                  
                  
              }
          }
    }
    };
}());
