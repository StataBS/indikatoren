(function () {
	return {
		"series": [{
			"color": "#68AB2B"
		},
		{
			"visible": false
		}],
		"data": {
			"parsed": function (columns) {

				//copy columns to the end, then remove the first 5

				columns.push(columns[2]); //WVI_name
				columns.push(columns[1]); //Anteil
				columns.push(columns[4]); //Rang
				columns.splice(0, 5);
			}
		}
	}
}());

//Colors of StatA Bereiche: violett3 #923F8D, gruen3 #68AB2B, blau3 #689199