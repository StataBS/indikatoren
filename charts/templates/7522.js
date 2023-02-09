/*global $*/
(function(){
    
    return {
      
      plotOptions: {
    
        series: {
            allowPointSelect: false,
            point: {
                events: {
                    legendItemClick: function (event) {
                        event.preventDefault();
                        /*
                        var id = this.id,
                            data = this.series.chart.series[0].data;
                        $.each(data, function (i, point) {
                           
                            if (point.parentId == id) {
                                if(point.visible)
                                    point.setVisible(false);
                                else
                                    point.setVisible(true);
                            }
                        });
                        */
                    }
                }
            }
        }
    },
        
      legend:{
        layout: "horizontal",
        verticalAlign: "top",
        align: "left",
        itemDistance: 2,
      	style: {
		fontSize: "12px"
		}
      },
      "series": [{
          data: {
                series: [
              {ParentId: '1',
          },{
              ParentId: '2',
          },{
              ParentId: '3',
          },{
              ParentId: '4',
          }]},
          
            showInLegend: false,
            type: 'pie',
            size: '100%',
            innerSize: '40%',
            center: [180,120],
          borderWidth: 2,
            colors: [
            "#68AB2B",
            "#FABD24",
            "#DC440E",
           "#8A8A8A",
           
           
        ],
      }, {
            data: {
                series: [
              {id: '1',
          },{
              id: '2',
          },{
              id: '3',
          },{
              id: '4',
          }]},
            showInLegend: true,
            type: 'pie',
            innerSize: '70%',
            center: [180,120],
          borderWidth: 2,
             colors: [
           "#68AB2B",
            "#FABD24",
            "#DC440E",
           "#8A8A8A",
            ],
        }],
        
    	"tooltip": {
    		"pointFormat": '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y} </b> ({point.percentage:.0f}%)<br/><br/>',
        "shared": false
      },
      
     labels: {
  items: [{
    html: 'Innen: Inland<br/>Aussen: Ausland',
    style: {
     left: '300px',
      top: '250px'
    }
  }]
}
		/*dataLabels: {
		                enabled: true,
		                format: '{point.percentage:.1f}',
		                distance: 1,
		                style: {
		                    color: 'black',
		                    textOutline: "0px black", 
                        fontWeight: "normal", 
                        fontSize: "12px"
		                }
	      }
      }
      */
     
    };
}());
