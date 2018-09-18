/*
global Highcharts
*/

(function(){
    return {
	chart: {		
    events:{
          load: function() {
              this.credits.element.onclick = function() {};
              
              //for top-left legends with no x defined: move legend to x position of first yAxis
              if (this['legend']['options']['align'] == 'left' && this['legend']['options']['verticalAlign'] == 'top' && this['legend']['options']['x'] == 0){
                this.update(
                  {
                    legend: {
                      x: this.yAxis[0].left - this.spacingBox.x - this.legend.padding
                    }
                  }
                );
              }
              //move legend title
              var title = this.legend.title;
              title.translate(-250, 40);
          }
      }
	},
  xAxis: {
    tickInterval: 1
  },
  yAxis: {
    min: 0,
  	labels: {
      formatter: function() {
         return 100 * this.value + "%";
      }
  	}
  },	
  "tooltip": {
    shared: false, 
	  pointFormatter: function(){
	    return '<span style="color:'+ this.series.color+'">\u25CF</span> ' + this.series.name + ': <b>'+ Highcharts.numberFormat(100 * this.y, 1, ",", " ")  + '%</b><br/>';
	  }
  },
  "series": [
    {
      color: 'rgb(220, 68, 14)',
    },
    {
      color: 'rgb(68, 141, 43)',
    },
    {
      color: 'rgb(250, 189, 36)',
    },
    {
      color: 'rgb(220, 68, 14)',
      marker:{
        enabled: true,
      }
    },
    {
      color: 'rgb(68, 141, 43)',
      marker:{
        enabled: true,
      }
    },
    {
      color: 'rgb(250, 189, 36)',
      marker:{
        enabled: true,
      }
    }
  ],
  "legend": {
    enabled: true,
    useHTML: true,
    "y": -45,
    "layout": "horizontal",
    "verticalAlign": "top",
    "itemMarginBottom": 5,
    "align": "right",
    "width": 210,
    "itemWidth": 70,    
    itemStyle: {
      "fontWeight": "normal",
      "width": 40
    },
    "title": {
    	"text": 'Effektiv:<br/>Auf Basis Zimmerzahl 2008:', 
    	style: {
    	  fontWeight: 'normal'
    	}
    },
    labelFormatter: function(){
        //remove text before year on each item with odd index
        //return (this.index % 3 != 0) ? this.name.slice(-5) : this.name;
        return this.name.slice(-5);
    }
  },
  plotOptions: {
    line: {
      marker:{
        symbol: 'circle', 
        //fillColor: '#FFFFFF',
        lineWidth: 2,
        lineColor: null // inherit from series
      }
    }
  }
}
}());
 