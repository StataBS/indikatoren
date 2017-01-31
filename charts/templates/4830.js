var chartOptions = {
	"series": [{
		"color": "#68AB2B"
	},
	{
		"visible": false
	}],
	"yAxis": {
		"min": 1800,
		"labels": {
            "formatter": function(){
                return Highcharts.numberFormat((this.value),0, ".", "");                
            }
        }		
    },
    "tooltip": {
        "formatter": function(args){
            var this_point_index = this.series.data.indexOf(this.point);
            var other_series_index = this.series.index == 0 ? 1 : 0; // assuming 2 series
            var other_series = args.chart.series[other_series_index];
            var other_point = other_series.data[this_point_index];
            return '<span style="color:' + this.color + ';">\u25CF</span><span style="font-size: 0.85em;"> ' + this.series.name + ':</span><br/>' + 
                this.point.name +': <b>' + Highcharts.numberFormat(this.y,0,",", "") + '</b><br/>' + 
                'Rang <b>' + other_point.y + '</b>';
        },        
    }
};

//Colors of StatA Bereiche: violett3 #923F8D, gruen3 #68AB2B, blau3 #689199