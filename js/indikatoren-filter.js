/*
 * based on auto.js, an example as part of filter.js (https://github.com/jiren/filter.js/)
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

  var afterFilter = function(result, jQ){
    //$('#total_movies').text(result.length);
    
    /*
    * Add Counts in brackets after each checkbox
    * @param {String} selector - CSS Selector String
    * @param {String} key - Key in json data for which occurrences are to be counted
    */
    var updateCounts = function(result, jQ, selector, key){
          var checkboxes  = $(selector);

          checkboxes.each(function(){
            
            var c = $(this), count = 0

            if(result.length > 0){
              var queryString = new Object();
              queryString[key] = c.val();
              count = jQ.where(queryString).count;
            }
            c.next().text(c.val() + ' (' + count + ')')
          });      
    }

    updateCounts(result, jQ, '#raeumlicheGliederung_criteria :input:gt(0)', 'raeumlicheGliederung');
    updateCounts(result, jQ, '#schlagwort_criteria :input:gt(0)', 'schlagwort');   
    
  }
  
  //var FJS = FilterJS.auto(indikatoren); //auto does not seem to work with pagination
  var FJS = FilterJS(indikatoren, '#movies', {
    template: '#movie-template',
    search: { ele: '#searchbox' },
    callbacks: {
          afterFilter: afterFilter 
    },    
    pagination: {
      container: '#pagination',
      visiblePages: 5,
      perPage: {
        values: [12, 30, 100],
        container: '#per_page'
      },
    }

  });

  FJS.addCriteria({field: "thema", ele: "#thema_filter", all: "all"});
  FJS.addCriteria({field: "kennzahlenset", ele: "#kennzahlenset_filter", all: "all"});
  FJS.addCriteria({field: "raeumlicheGliederung", ele: "#raeumlicheGliederungen input:checkbox"});
  FJS.addCriteria({field: "schlagwort", ele: "#schlagworte input:checkbox"});

  FJS.filter();

  window.FJS = FJS;
});

function initFilters(){

  $('#schlagwort_criteria :checkbox').prop('checked', true);
  $('#all_schlagwort').on('click', function(){
    $('#schlagwort_criteria :checkbox').prop('checked', $(this).is(':checked'));
  });

  $('#raeumlicheGliederung_criteria :checkbox').prop('checked', true);
  $('#all_raeumlicheGliederung').on('click', function(){
    $('#raeumlicheGliederung_criteria :checkbox').prop('checked', $(this).is(':checked'));
  });
};
