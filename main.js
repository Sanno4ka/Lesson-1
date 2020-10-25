jQuery(function () {
  $("#ageOkay").on("click", function () {
    let age = $("#ageValue").val();
    $("#ageWrapper").removeClass("ageUnknown");
    if (age >= 18) {
      $("#agePopUp").removeClass("ageNotConfirmed");
      $("#agePopUp").addClass("ageConfirmed");
      $(".lock").removeClass("lock");
      
    } else {
      $("#agePopUp").addClass("ageNotConfirmed");
    }
  });
});
