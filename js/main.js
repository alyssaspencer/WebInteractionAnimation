

//creating data viz for parent info area
$(function() { 
  $("#bookNumber").hide();
  $("#abacusNumber").hide();

  $("#moveIt").click(function(){

    $("#book").animate({width:"300px", height:"100px"}, 1000);
    $("#bookNumber").slideDown(1000);

    $("#abacus").animate({width:"300px"}, 1000);
    $("#abacusNumber").slideDown(1000);

  });

    
});