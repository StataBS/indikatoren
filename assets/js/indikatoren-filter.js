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
  
  var fjsConfig = {
    template: '#indikator-template',
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
  };
  
  //Render page differently depending on url query string  
  var indikatorenset = $.url('?Indikatorenset'); 
  if (indikatorenset){ 
    prepareIndikatorensetView(indikatorenset);
    var FJS = FilterJS(indikatoren, '#indikatoren', fjsConfig);
    FJS.addCriteria({field: "kennzahlenset", ele: "#kennzahlenset_filter", all: "all"});
    FJS.addCriteria({field: "stufe1", ele: "#stufe1_filter", all: "all"});
    FJS.addCriteria({field: "stufe2", ele: "#stufe2_filter", all: "all"});
  }  
  else {
    preparePortalView();
    var FJS = FilterJS(indikatoren, '#indikatoren', fjsConfig);
    FJS.addCriteria({field: "thema", ele: "#thema_criteria input:checkbox"});
    FJS.addCriteria({field: "schlagwort", ele: "#schlagwort_filter", all: "all"});
    FJS.addCriteria({field: "raeumlicheGliederung", ele: "#raeumlicheGliederung_filter", all: "all"});  
  }
  

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
  //Only now display page
  $('body').show();
});


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

function preparePortalView(){
  $("#main-control-element-indikatorenset").remove();    
  renderThema();
  renderSchlagwort();
  renderRaeumlicheGliederung();   
};

function prepareIndikatorensetView(indikatorenset){
  $("#sidebar-element").remove();
  //Change bootstrap col size in order to fill width 
  $("#main-element").removeClass();
  $("#main-element").addClass('col-xs-12');
  $("#main-control-element-portal").remove();
    
  renderDropdownFromJson(indikatoren, 'kennzahlenset', '#kennzahlenset_filter', 'kennzahlenset');
  //select requested Indikatorenset in dropdown
  $('#kennzahlenset_filter').val(indikatorenset);  
  renderDropdownFromJson(indikatoren, 'stufe1', '#stufe1_filter', 'stufe1', 'kennzahlenset', indikatorenset);
  renderDropdownFromJson(indikatoren, 'stufe2', '#stufe2_filter', 'stufe2', 'kennzahlenset', indikatorenset);

  //cascaded dropdowns: remove selection on 2nd level dropdown upon change in first level dropdown
  $('#stufe1_filter').change(function(){
    $('#stufe2_filter :nth-child(1)').prop('selected', true);
    $('#stufe2_filter').change();
  });  

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

  //Check checkboxes  
  $('#thema_criteria :checkbox').prop('checked', true);
  $('#all_thema').on('click', function(){
    $('#thema_criteria :checkbox').prop('checked', $(this).is(':checked'));
  });

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


function renderDropdownFromJson(data, field, selector, sortKey, filterKey, filterValue){
  var JQ = JsonQuery(data);
  //If filterKey and filterValue are given: filter data before rendering dropdowns
  if (typeof filterKey !== 'undefined' && typeof filterValue !== 'undefined') {
    var queryString = new Object();
    queryString[filterKey] = filterValue;              
    JQ = JQ.where(queryString);
  } 
  //Sort if sortKey is given 
  if (typeof sortKey !== 'undefined'){
    var sortOptions = new Object();
    sortOptions[sortKey] = 'asc';
    JQ=JQ.order(sortOptions);
  }
  var allValues = JQ.pluck(field).all;
  //get unique values  
  var uniqueValues = allValues.filter(function(item, i, ar){ return ar.indexOf(item) === i && item != ""; }); 
  var html = $('#option-template').html();
  var templateFunction = FilterJS.templateBuilder(html);
  var container = $(selector);
  //render options
  $.each(uniqueValues, function(i, c){
    container.append(templateFunction({ key: c, value: c }))
  });
};


function renderMultiselectDropdownFromJson(data, field, selector){
  var JQ = JsonQuery(data);
  var allValues = JQ.pluck(field).all;
  //get unique values and filter out empty string 
  var uniqueValues = allValues.filter(function(item, i, ar){ return ar.indexOf(item) === i && item != ""; }); 
  var html = $('#option-template').html();
  var templateFunction = FilterJS.templateBuilder(html);
  var container = $(selector);
  //render options
  $.each(uniqueValues, function(i, c){
    container.append(templateFunction({ key: c, value: c }))
  });
  //convert select control to multiselect dropdown
  configureMultiselect(selector);  
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


var afterFilter = function(result, jQ){
    //$('#total_indikatoren').text(result.length);    
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
            //render text using the appropriate function
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
