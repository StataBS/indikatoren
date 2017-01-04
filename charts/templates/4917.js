var chartOptions = {
	"series": [{
		"color": "#68AB2B"
	}],
	"yAxis": {
		"labels": {
            "formatter": function(){
                return Highcharts.numberFormat((this.value), 0, ".", " ");                
            }
        }		
    },
	"tooltip": {
        "pointFormatter": function(){
            //rank is calculated from index, thus data needs to be sorted by rank ascending.
            return '<span style="color:{series.color}">' + this.series.data[this.x].name + '</span>: <b>' + Highcharts.numberFormat(this.y,1,",", "") + '</b><br/>Rang <b>' + parseInt(this.x + 1) + '</b>'               
        }
    }
};

//Colors of StatA Bereiche: violett3 #923F8D, gruen3 #68AB2B, blau3 #689199