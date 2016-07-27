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

  //remove elements 
  //$("#sidebar-element").remove();
  //$("#main-control-element-portal").remove();
  $("#main-control-element-indikatorenset").remove();  

  renderThema();
  renderSchlagwort();
  renderRaeumlicheGliederung(); 
  renderKennzahlenset();
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
  FJS.addCriteria({field: "kennzahlenset", ele: "#kennzahlenset_filter", all: "all"});
  

  var sortOptions = {'kuerzel': 'asc'};

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
    case 'kuerzel_asc': 
      return {'kuerzel': 'asc'};
    case 'kuerzel_desc': 
      return {'kuerzel': 'desc'};         
    default : 
      return {'kuerzel': 'asc'};     
  }
};



function renderThema(){  
  var values = ["01 Bevölkerung",	"02 Raum, Landschaft, Umwelt",	"03 Erwerbsleben",	"04 Volkswirtschaft",	"05 Preise",	"06 Produktion und Handel",	"07 Land- und Forstwirtschaft",	"08 Energie",	"09 Bau- und Wohnungswesen",	"10 Tourismus",	"11 Verkehr",	"12 Finanzmärkte und Banken",	"13 Soziale Sicherheit",	"14 Gesundheit",	"15 Bildung und Wissenschaft",	"16 Kultur und Sport",	"17 Politik",	"18 Öffentliche Finanzen",	"19 Rechtspflege", "50 Regelmässige Befragungen"];

  var html = $('#checkbox-template').html();
  var templateFunction = FilterJS.templateBuilder(html);
  var container = $('#thema_criteria');
  
  $.each(values, function(i, c){
    //var themaName = (i+1) + " " + c;
    //container.append(templateFunction({ key: c, value: themaName }))
    container.append(templateFunction({ value: c }))
  });
};

function configureMultiselect(selector){
  //configure multiselect
  $(selector).multiselect({
      buttonWidth: '100%', 
      inheritClass: true, 
      includeSelectAllOption: true, 
      selectAllText: 'Alle', 
      enableFiltering: true, 
      enableCaseInsensitiveFiltering: true,
      filterPlaceholder: 'Suche...', 
      nonSelectedText: 'Keines ausgewählt', 
      allSelectedText: 'Alle ausgewählt', 
      nSelectedText: 'ausgewählt'
    }
    /*
      maxHeight: 400,
      dropUp: true,
      checkboxName: function(option) {
          return 'multiselect_test';
      }
      selectAllValue: 'all',
    */
  );

  //check all boxes
  $(selector).multiselect('selectAll', false);
  $(selector).multiselect('updateButtonText');
};


function renderSchlagwort(){
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
  //convert select control to multiselect dropdown
  configureMultiselect('#schlagwort_filter');
};

function renderRaeumlicheGliederung(){
  var values = ["Kanton", "Gemeinde", "Wohnviertel", "Bezirk", "Block", "Blockseite"];

  var html = $('#option-template').html();
  var templateFunction = FilterJS.templateBuilder(html);
  var container = $('#raeumlicheGliederung_filter');

  $.each(values, function(i, c){
    container.append(templateFunction({ key: c,  value: c }))
  });

  //convert select control to multiselect dropdown
  configureMultiselect('#raeumlicheGliederung_filter');
};


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


var afterFilter = function(result, jQ){
    //$('#total_movies').text(result.length);    

    //Add Counts in brackets after each option
    var updateCounts = function(result, jQ, selector, key, renderFunction){
          var checkboxes  = $(selector);

          checkboxes.each(function(){            
            var c = $(this), count = 0
            if(result.length > 0){
              var queryString = new Object();
              queryString[key] = c.val();              
              count = jQ.where(queryString).count;
            }
            renderFunction(c, count);
          });      
    }

    //define how counts are rendered 
    var optionCountRenderFunction = function(c, count){c.text(c.val() + ' (' + count + ')') };
    var checkboxCountRenderFunction = function(c, count){c.next().text(c.val() + ' (' + count + ')')};

    updateCounts(result, jQ, '#thema_criteria :input:gt(0)', 'thema', checkboxCountRenderFunction);        
    updateCounts(result, jQ, '#schlagwort_filter > option', 'schlagwort', optionCountRenderFunction);
    updateCounts(result, jQ, '#raeumlicheGliederung_filter > option', 'raeumlicheGliederung', optionCountRenderFunction);

    //for multiselect dropdowns: rebuild control after select tag is updated
    $('#schlagwort_filter').multiselect('rebuild');
    $('#raeumlicheGliederung_filter').multiselect('rebuild');
  };
