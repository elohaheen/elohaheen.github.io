$(function() {
  smoothScroll(500);
});

function smoothScroll (duration) {
  $('a[href^="#"]').on('click', function(event) {

    var target = $( $(this).attr('href') );

    if( target.length ) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top -100
      }, duration);
    }
  });
}

var a = $(".header__nav").offset().top;

$(document).scroll(function(){
  if($(this).scrollTop() > 1000)
  {
     $('.header__nav').css({"background":"#fff"});
  } else {
     $('.header__nav').css({"background":"rgba(128, 128, 128, 0.1)"});
  }
});

var nav = responsiveNav(".nav-collapse", {
  customToggle: "js-nav-toggle",
  closeOnNavClick: true
});
