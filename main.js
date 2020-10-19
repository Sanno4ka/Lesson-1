

$(document).ready(function(){
  let age 
  $('#ageOkay').click(function() {
    $.cookie('age', 'true', { expires: 1, path: '/' });
    $('#ageWrapper').removeClass('ageUnknown');
  });
  
  if(age >= 18)
  {

    $('#ageWrapper').addClass('ageConfirmed');

  
  }else{
    window.location.href='http://www.youtube.com';
  }

});
  