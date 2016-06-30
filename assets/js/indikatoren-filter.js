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

  renderRaeumlicheGliederung(); 
  renderThema();
  initFilters();
    

  
  //var FJS = FilterJS.auto(indikatoren); //auto does not seem to work with pagination
  var FJS = FilterJS(indikatoren, '#movies', {
    template: '#movie-template',
    search: { ele: '#searchbox' },
    callbacks: {
          afterFilter: afterFilter, 
          shortResult: sortResult
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
  FJS.addCriteria({field: "raeumlicheGliederung", ele: "#raeumlicheGliederung_criteria input:checkbox"});
  FJS.addCriteria({field: "schlagwort", ele: "#schlagwort_criteria input:checkbox",});

  var sortOptions = {'id': 'asc'};

  $("#sortBy").on('change', function(e){
    sortOptions = getSortOptions($(this).val());
    FJS.filter();
    e.preventDefault();
  });

  function sortResult(query){
    if(sortOptions){
      query.order(sortOptions);
    }
  }

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


function getSortOptions(name){
  switch(name){
    case 'description_asc': 
      return {'description': 'asc'};
    case 'description_desc': 
      return {'description': 'desc'};         
    default : 
      return {'id': 'asc'};     
  }
};


function renderRaeumlicheGliederung(){
  var values = ["Kanton", "Gemeinde", "Wohnviertel", "Bezirk", "Block", "Blockseite"];

  var html = $('#checkbox-template').html();
  var templateFunction = FilterJS.templateBuilder(html);
  var container = $('#raeumlicheGliederung_criteria');

  $.each(values, function(i, c){
    container.append(templateFunction({  value: c }))
  });
};


function renderThema(){
  var values = ["Bevölkerung", "Raum, Landschaft, Umwelt", "Erwerbsleben", "Volkswirtschaft", "Preise", "Produktion und Handel", "Land- und Forstwirtschaft", "Energie", "Bau- und Wohnungswesen", "Tourismus", "Verkehr", "Finanzmärkte und Banken", "Soziale Sicherheit", "Gesundheit", "Bildung und Wissenschaft", "Kultur und Sport", "Politik", "Öffentliche Finanzen", "Rechtspflege"];

  var html = $('#option-template').html();
  var templateFunction = FilterJS.templateBuilder(html);
  var container = $('#thema_filter');

  $.each(values, function(i, c){
    var themaName = (i+1) + " " + c;
    container.append(templateFunction({ key: c, value: themaName }))
  });
    
};

  var afterFilter = function(result, jQ){
    //$('#total_movies').text(result.length);
    
    /*
    * Add Counts in brackets after each checkbox
    * @param {String} selector - CSS Selector String
    * @param {String} key - Key in json data for which occurrences are to be counted
    */
    var updateCheckboxCounts = function(result, jQ, selector, key){
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
   
    var updateOptionCounts = function(result, jQ, selector, key){
          var checkboxes  = $(selector);

          checkboxes.each(function(){
            
            var c = $(this), count = 0

            if(result.length > 0){
              var queryString = new Object();
              queryString[key] = c.val();              
              count = jQ.where(queryString).count;
              console.log(queryString);
              console.log(count);
            }
            //c.next().text(c.val() + ' (' + count + ')')
          });      
    }
    

    updateCheckboxCounts(result, jQ, '#raeumlicheGliederung_criteria :input:gt(0)', 'raeumlicheGliederung');
    updateCheckboxCounts(result, jQ, '#schlagwort_criteria :input:gt(0)', 'schlagwort');   
    updateOptionCounts(result, jQ, '#thema_filter > option:gt(0)', 'thema');
    
  };
