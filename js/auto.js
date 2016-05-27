$(document).ready(function(){

  initFilters();

  var FJS = FilterJS.auto(indikatoren)


  FJS.addCallback('afterFilter', function(result){
    $('#total_movies').text(result.length);
  });
  
  FJS.filter();

  window.FJS = FJS;
});

function initFilters(){
  $('#schlagwort_criteria :checkbox').prop('checked', true);
  $('#all_schlagwort').on('click', function(){
    $('#schlagwort_criteria :checkbox').prop('checked', $(this).is(':checked'));
  });
}
