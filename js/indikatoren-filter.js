/*
 * auto.js, an example as part of filter.js (https://github.com/jiren/filter.js/)
 * 2.1.0 (2015-10-17)
 *
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
 * Copyright 2011-2015 Jiren Patel[jirenpatel@gmail.com]
 *
 * Dependency:
 *  jQuery(v1.9 >=)
 */

$(document).ready(function(){

  initFilters();

  //var FJS = FilterJS.auto(indikatoren); //auto does not seem to work with pagination
  var FJS = FilterJS(indikatoren, '#movies', {
    template: '#movie-template',
    search: { ele: '#searchbox' }
    /*
    ,
    pagination: {
      container: '#pagination',
      visiblePages: 5,
      perPage: {
        values: [12, 15, 30],
        container: '#per_page'
      },
    }
    */
  });

  FJS.addCallback('afterFilter', function(result){
    $('#total_movies').text(result.length);
  });

  FJS.addCriteria({field: "thema", ele: "#thema_filter", all: "all"});
  FJS.addCriteria({field: "kennzahlenset", ele: "#kennzahlenset_filter", all: "all"});
  FJS.addCriteria({field: "raeumlicheGliederung", ele: "#raeumlicheGliederungen input:checkbox"});
  FJS.addCriteria({field: "schlagwort", ele: "#schlagworte input:checkbox"});

  FJS.filter();

  window.FJS = FJS;
});

function initFilters(){

  $('#schlagwort_criteria :checkbox').prop('checked', false);
  /*
  $('#all_schlagwort').on('click', function(){
    $('#schlagwort_criteria :checkbox').prop('checked', $(this).is(':checked'));
  });
  */
  $('#raeumlicheGliederung_criteria :checkbox').prop('checked', false);
  /*
  $('#all_raeumlicheGliederung').on('click', function(){
    $('#raeumlicheGliederung_criteria :checkbox').prop('checked', $(this).is(':checked'));
  });
  */
};
