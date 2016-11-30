$(document).ready(function() {


  $(document).scroll(function(){
      if($(this).scrollTop() > 500) {
         $('.nav-home').css({"background":"#11B3F0"});
      } else {
         $('.nav-home').css({"background":"transparent"});
      }
  });

  $("#lightbulb").hover(function() {
      $('#lightbulb').fadeOut();
      $('#lightbulb').fadeIn();
  });

  $(".number-image").hover(function() {
    $(".number-image").css({"opacity" : ".5"});
    $("#" + this.id.slice(0)).css({"opacity" : "1"});
    $(".number-image").css({"cursor" : "pointer"});
  });

  $(".number-image").click(function() {
    $(".number-text").css({"display" : "none"});
    $(".number-image").css({"opacity" : ".5"});

    var num = "t" + this.id.slice(0);
    $("#" + num).css({"display" : "block"});
    $("#" + this.id.slice(0)).css({"opacity" : "1"});
  });


});