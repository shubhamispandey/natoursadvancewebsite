$(document).ready(function() {


  /* ------------------------------------scroll on buttons --------------------------------------------------------------*/
  $('.js-scroll-to-tours').click(function() {
    $('html, body').animate({scrollTop: $('.js-section-tours').offset().top}, 1000);
  });

  $('.js-scroll-btn-learn-a').click(function() {
    $('html,body').animate({ scrollTop: $('.js-section-features').offset().top}, 1000);
  });

  $('.js-scroll-btn-learn-b').click(function () {
    $('html,body').animate({ scrollTop: $('.section-stories').offset().top }, 1000);
  });


/* ------------------------------------effects on scroll --------------------------------------------------------------*/



  $('.composition').waypoint(function (direction) {
    if (direction == "down") {
      $('.composition').addClass('animate__fadeInRight');
    }
  }, {
    offset: '80%'
  });

  $('.feature-box').waypoint(function (direction) {
    if (direction == "down") {
      $('.feature-box').addClass('animate__fadeInUp');
    }
  }, {
    offset: '90%'
  });

  $('.card').waypoint(function (direction) {
    if (direction == "down") {
      $('.card').addClass('animate__fadeIn');
    }
  }, {
    offset: '80%'
  });

});
