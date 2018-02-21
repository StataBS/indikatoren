(function(){
    return {
      series: [
        {
        }
      ], 
      tooltip: {
      	useHTML: false,
        pointFormat: '<span style="color:{point.color}">\u25CF</span> <span style="font-size: 10px"> {point.name}</span><br/>' +
            'Veränderung 2017 gegenüber dem Mittelwert 2008-2017:<b> {point.x}%</b><br/>' +
            'Logiernächte 2017 in Tausend:<b> {point.y}</b><br/>' +
            'Marktanteil 2017:<b> {point.z}%</b>'
      },
      data: {
		    seriesMapping: [
		    		//bubble series
		        {x: 1, y: 2, z: 3, name: 0, color: 4}
        ],  
        parsed: function(columns){
          //define colors by entry in first column
          var colors = columns[0].map(function(val, i, arr){
          	//column name
          	if (i == 0){
          		val = 'color';
          	}
          	//column value
          	else {
              switch (val){
              	/*case 'Schweiz': val = 'rgb(176, 0, 0)'; break;
              	case 'Deutschland': val = 'rgb(255, 128, 40)'; break;
              	case 'Vereinigte Staaten': val = 'rgb(115, 186, 124)'; break;
              	case 'Vereinigtes Königreich': val = 'rgb(180, 117, 171)'; break;
              	case 'Frankreich': val = 'rgb(8, 161, 217)'; break;
              	case 'Italien': val = 'rgb(131, 82, 46)'; break;
              	case 'Spanien': val = 'rgb(255, 232, 70)'; break;
              	case 'Niederlande': val = 'rgb(60, 60, 60)'; break;
              	case 'China, Hongkong, Taiwan': val = 'rgb(103, 39, 115)'; break;*/
              	
              	case 'CH': val = 'rgb(176, 0, 0)'; break;
              	case 'DE': val = 'rgb(255, 128, 40)'; break;
              	case 'US': val = 'rgb(115, 186, 124)'; break;
              	case 'GB': val = 'rgb(180, 117, 171)'; break;
              	case 'FR': val = 'rgb(8, 161, 217)'; break;
              	case 'IT': val = 'rgb(131, 82, 46)'; break;
              	case 'ES': val = 'rgb(255, 232, 70)'; break;
              	case 'NL': val = 'rgb(60, 60, 60)'; break;
              	case 'CN': val = 'rgb(103, 39, 115)'; break;
              	
              	
              	//default: val = 'black';
          		}
          	}
            return val;
          });
          columns.push(colors);
        }
      }, 
      xAxis:{
        min: 0,
        labels: {
          format: '{value}%'
        },
        title: {
        	text: 'Veränderung 2017 gegenüber dem Mittelwert 2008-2017'
        }
      },
      yAxis: {
      	title: {
      		text: 'Logiernächte 2017 in Tausend'
      	}
      },
	plotOptions: {
    	    series: {

    	    },
    	    bubble: {
    	        label: {
    	            enabled: true
    	        },
                dataLabels: {
               /*formatter: function() {
               //only return last word
    		   return this.name.split(" ").slice(-1);
    		   //return Highcharts.numberFormat(this.point.y, 0, ",", " ") // I dont't want to display a number but a character
        		},*/
                	x:-20,
                	y:-5,
                	
                	allowOverlap: true,
                	//padding: 50,
                	//borderRadius:100,
                	//overflow: "none",
                	//crop: false,
                    style: {
                        fontSize: 10,
                        color: 'black',
                        fontWeight: 'normal',
                        textShadow: 'none',
                        },
                },
    	   },
    },
    };
}());

