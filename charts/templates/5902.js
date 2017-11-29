/* 
    global $
*/

(function(){
    return {
      "data":{
      	"switchRowsAndColumns": true
      },
      xAxis: {
          type: "category"
      },
      "series": [ 
          {
              innerSize: '20%',
              id: 0, 
              allowPointSelect: false,
       		  dataLabels: {
                enabled: true,
                distance: -70,
                format: "{point.percentage:,.0f}%",
                formatter: function(){
                    //console.log(this);
                    return /*this.series.name; + ":<br/>" + */this.point.percentage;
                },
                style: {
                    color: 'black', 
                    textOutline: "0px black", 
                    fontWeight: "normal", 
                    fontSize: "10px"
                },
      		}
          }, 
          {
              innerSize: '60%',
              linkedTo: ':previous',
              showInLegend: false, 
              allowPointSelect: false,
     		  dataLabels: {
                enabled: true,
                distance: -30,
                style: {
                    color: 'black', 
                    textOutline: "0px black", 
                    fontWeight: "normal", 
                    fontSize: "10px"
                },
                format: "{point.percentage:,.0f}%",
                formatter: function(){
                    return this.point.percentage;
                }
      		}

          }
      ],
    	"tooltip": {
    		"pointFormat": '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:.2f} km ({point.percentage:.1f}%)</b><br/>',
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
             ],
			}
      },
     chart: {
        //width: 1283,
        //height: 411,
        "width": 485,
        "height": 415,
        events:{
              load: function() {
                  this.credits.element.onclick = function() {};
        
                //Label the two rings of the donut chart
				this.renderer.label("Innen: " + this.series[0].name, 285, 120).attr({
					zIndex: 6,
					class: 'pieLegend'
				})        
				.css({
                    fontSize: '12px',
                    fontWeight: 'bold'
                })
				.add();
				this.renderer.label("Aussen: " + this.series[1].name, 285, 100).attr({
					zIndex: 6,
					class: 'pieLegend'
				})
    			.css({
                    fontSize: '12px',
                    fontWeight: 'bold'
                })

				.add();
        
        
        
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
