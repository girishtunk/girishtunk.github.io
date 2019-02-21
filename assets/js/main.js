$(document).ready(function() {

// Adding Fixed Navaigation
  $('#aboutme').waypoint(function(direction){
    if(direction == 'down'){
      $('nav').addClass('fixed-nav');
    } else {
      $('nav').removeClass('fixed-nav');
    }
  }, {
    offset:'80px'
  });

// Scroll Buttons

  $('#btn-aboutme').click(function(){
    $('html,body').animate({scrollTop:$('#aboutme').offset().top-70},1000);
  });

  // Smooth Scolling

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
          scrollTop: target.offset().top - 70
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

  // Animation scroll

  $('.animate1').waypoint(function(direction){
    $('.animate1').addClass('animated fadeInUp');
  }, {
    offset:'50%'
  });

  $('.animate2').waypoint(function(direction){
    $('.animate2').addClass('animated fadeInRight');
  }, {
    offset:'50%'
  });

  $('.animate3').waypoint(function(direction){
    $('.animate3').addClass('animated zoomIn');
  }, {
    offset:'50%'
  });


  // Responsive Mobile

  $('#mobi-nav').click(function(){
    let nav = $('.nav-bar');

    nav.slideToggle(200);
  });

});
