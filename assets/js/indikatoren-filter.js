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

  renderThema();
  renderSchlagworte();
  renderRaeumlicheGliederung(); 
  //renderKennzahlenset();
  checkCheckboxes();
    
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
        values: [16, 30, 100],
        container: '#per_page'
      },
    }

  });

  FJS.addCriteria({field: "thema", ele: "#thema_criteria input:checkbox"});
  FJS.addCriteria({field: "schlagwort", ele: "#schlagwort_filter", all: "all"});
  FJS.addCriteria({field: "raeumlicheGliederung", ele: "#raeumlicheGliederung_filter", all: "all"});  
  //FJS.addCriteria({field: "kennzahlenset", ele: "#kennzahlenset_filter", all: "all"});
  

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

function checkCheckboxes(){
  $('#thema_criteria :checkbox').prop('checked', true);
  $('#all_thema').on('click', function(){
    $('#thema_criteria :checkbox').prop('checked', $(this).is(':checked'));
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

  var html = $('#option-template').html();
  var templateFunction = FilterJS.templateBuilder(html);
  var container = $('#raeumlicheGliederung_filter');

  $.each(values, function(i, c){
    container.append(templateFunction({ key: c,  value: c }))
  });
};


function renderThema(){
  var values = ["Bevölkerung", "Raum, Landschaft, Umwelt", "Erwerbsleben", "Volkswirtschaft", "Preise", "Produktion und Handel", "Land- und Forstwirtschaft", "Energie", "Bau- und Wohnungswesen", "Tourismus", "Verkehr", "Finanzmärkte und Banken", "Soziale Sicherheit", "Gesundheit", "Bildung und Wissenschaft", "Kultur und Sport", "Politik", "Öffentliche Finanzen", "Rechtspflege"];

  var html = $('#checkbox-template').html();
  var templateFunction = FilterJS.templateBuilder(html);
  var container = $('#thema_criteria');
  
  $.each(values, function(i, c){
    //var themaName = (i+1) + " " + c;
    //container.append(templateFunction({ key: c, value: themaName }))
    container.append(templateFunction({ value: c }))
  });
};


function renderSchlagworte(){
  var indikatorenJQ = JsonQuery(indikatoren);
  //get array of arrays  
  var schlagworteNested = indikatorenJQ.pluck('schlagwort').all;
  //reduce array dimensionality 
  var schlagworteAll = [].concat.apply([], schlagworteNested).sort();
  //get unique values  
  var schlagworteUnique = schlagworteAll.filter(function(item, i, ar){ return ar.indexOf(item) === i; });

  var html = $('#option-template').html();
  var templateFunction = FilterJS.templateBuilder(html);
  var container = $('#schlagwort_filter');
  //render options
  $.each(schlagworteUnique, function(i, c){
    container.append(templateFunction({ key: c, value: c }))
  });    
};

/*
function renderKennzahlenset(){
  var indikatorenJQ = JsonQuery(indikatoren);
  var kennzahlensetAll = indikatorenJQ.pluck('kennzahlenset').all;
  //get unique values  
  var kennzahlensetUnique = kennzahlensetAll.filter(function(item, i, ar){ return ar.indexOf(item) === i; }); 

  var html = $('#option-template').html();
  var templateFunction = FilterJS.templateBuilder(html);
  var container = $('#kennzahlenset_filter');
    
  //render options
  $.each(kennzahlensetUnique, function(i, c){
    container.append(templateFunction({ key: c, value: c }))
  });
};
*/

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

    /*
    * Add Counts in brackets after each option
    * @param {String} selector - CSS Selector String
    * @param {String} key - Key in json data for which occurrences are to be counted
    */   
    var updateOptionCounts = function(result, jQ, selector, key){
          var checkboxes  = $(selector);

          checkboxes.each(function(){
            
            var c = $(this), count = 0

            if(result.length > 0){
              var queryString = new Object();
              queryString[key] = c.val();              
              count = jQ.where(queryString).count;
            }
            c.text(c.val() + ' (' + count + ')')   
          });      
    }
    

    updateOptionCounts(result, jQ, '#raeumlicheGliederung_filter > option:gt(0)', 'raeumlicheGliederung');
    updateOptionCounts(result, jQ, '#schlagwort_filter > option:gt(0)', 'schlagwort');   
    updateCheckboxCounts(result, jQ, '#thema_criteria :input:gt(0)', 'thema');
    //updateOptionCounts(result, jQ, '#kennzahlenset_filter > option:gt(0)', 'kennzahlenset');
    
  };
