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
            },
          /* dataLabels: {
              enabled: true,
              distance: -10,
              format: '{point.percentage:.1f}'+ "%",
              style: {
                  fontSize: "10px", 
                  fontWeight: "normal",
                  color: "black", 
                  textOutline: "0px black"
              }
          } */}
    },
        
      legend:{
        layout: "horizontal",
        verticalAlign: "top",
        align: "left",
        itemDistance: 20,
      	style: {
    fontSize: "10px",
    color: "black"
		}
      },
      "series": [{
          data: {
                series: [
              {ParentId: '1', 
              /*dataLabels: {
                enabled: true,
                format: '{point.percentage:.0f}'+ "%",
                style: {
                  fontSize: "10px", 
                  fontWeight: "normal",
                  color: "black", 
                  textOutline: "0px black",
                  x: 80,
                  y: 60}     */           
        },
        {
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
            center: [80,80],
           dataLabels: {
              enabled: true,
              distance: -40,
              format: '{point.percentage:.0f}'+ "%",
              style: {
                  fontSize: "10px", 
                  fontWeight: "normal",
                  color: "black", 
                  textOutline: "0px black"
              }
          },
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
            size: '100%',
            innerSize: '70%',
            center: [80,80],
            dataLabels: {
              enabled: true,
              distance: -15,
              format: '{point.percentage:.0f}'+ "%",
              style: {
                  fontSize: "10px", 
                  fontWeight: "normal",
                  color: "black", 
                  textOutline: "0px black"
              }
          },
          borderWidth: 2,
             colors: [
           "#68AB2B",
            "#FABD24",
            "#DC440E",
           "#8A8A8A",
            ],
        }],
        
    	"tooltip": {
    		"pointFormat": '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y} </b> ({point.percentage:.1f}%)<br/><br/>',
        "shared": false
      },
      
     labels: {
  items: [{
    html: 'Innen: Inland<br/>Aussen: Ausland',
    style: {
     left: '200px',
      top: '150px',
      fontSize: '10px',
      color: '#000000'
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
