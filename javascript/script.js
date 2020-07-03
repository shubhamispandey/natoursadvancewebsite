$(document).ready(function() {

  /* ---------------------------------------------for stycky nav bar------------------------------------------------- */

  $('.js-nav').waypoint(function(direction) {
    if( direction == "down" )
    {
      $('.nav-bar').addClass('sticky');
    }
    else
    {
      $('.nav-bar').removeClass('sticky');
    }
  },{
    offset: '90px'
  });


  /* ------------------------------------scroll on buttons --------------------------------------------------------------*/
  $('.js-scroll-to-plans').click(function() {
    $('html, body').animate({scrollTop: $('.js-section-plans').offset().top}, 1000);
  });

  $('.js-scroll-to-start').click(function() {
    $('html,body').animate({scrollTop: $('.js-nav').offset().top}, 1000);
  });

/* ------------------------------------scroll on nav links --------------------------------------------------------------*/
      // Select all links with hashes
    $('a[href*="#"]')
      // Remove links that don't actually link to anything
      .not('[href="#"]')
      .not('[href="#0"]')
      .click(function(event) {
        // On-page links
        if (
          location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
          &&
          location.hostname == this.hostname
        ) {
          // Figure out element to scroll to
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          // Does a scroll target exist?
          if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000, );
          }
        }
      });

/* ------------------------------------effects on scroll --------------------------------------------------------------*/



  $('.flexbox-container').waypoint(function(direction) {
    if( direction == "down" )
    {
      $('.flexbox-container').addClass('animate__fadeInUp');
    }
  },{
    offset: '70%'
  });

  $('.iphonejpg').waypoint(function(direction) {
    if( direction == "down" )
    {
      $('.iphonejpg').addClass('animate__fadeInLeft');
    }
  },{
    offset: '70%'
  });

  $('.cities-discreption').waypoint(function(direction) {
    if( direction == "down" )
    {
      $('.cities-discreption').addClass('animate__fadeIn');
    }
  },{
    offset: '80%'
  });

  /*---------------------- nav bar appear on mobile by clicking menu button------------------------------------------*/
  var count=0;
  $('.js-nav-icon').click(function() {
    var nav = $('.js-main-nav');
    nav.slideToggle(500);
    $('.js-nav-icon').css('display','none');
    $('.js-nav-icon-cross').css('display','inline-block');

  });

  $('.js-nav-icon-cross').click(function()
  {
    var nav = $('.js-main-nav');
    nav.slideToggle(500);
    $('.js-nav-icon').css('display','inline-block');
    $('.js-nav-icon-cross').css('display','none');
  });

});
