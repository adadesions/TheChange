function showBorder(el, borderColor){
  const value = '0.5em solid' + borderColor;
  $(el).stop().css({'border-bottom': value})
  .animate({
    borderWidth: '0.5em'
  }, 'fast');
}

function hideBorder(el){
  const value = 'none'
  $(el).stop().css({'border-bottom': value});
}

function showSubMenu(el, borderColor, speed) {
  const ele = $(el);
  const header = $(el+'-header');
  header.css({
    'padding-bottom': '1em',
    'border-bottom-style': 'solid',
    'border-bottom-color': borderColor
  })
  .animate({
    borderWidth: '0.5em',
  }, '1000');
  ele.stop().slideDown(speed);
}
function hideSubMenu(el, speed) {
  const ele = $(el);
  const header = $(el+'-header');
  header.css({
    'padding-bottom': '0',
    'border-bottom': 'none'
  });
  ele.stop().slideUp(speed);
}

$(function() {
  const logo = $('#logo');
  const home = $('#nav-home');
  const accomodation = $('#nav-accomodation');
  const services = $('#nav-services');
  const facilities = $('#nav-facilities');
  const aboutus = $('#nav-aboutus');

  $(window).on('hashchange', function () {
    window.scrollTo(window.scrollX, window.scrollY - 100);
  });

// HOME
  home.mouseenter(function () {
    showBorder(this, '#FFDB61');
  });

  home.mouseleave(function () {
    hideBorder(this);
  });
// END HOME

// ACCOMODATION
  accomodation.mouseenter(function(){
    showBorder(this, '#37401B');
    showSubMenu('#sub-accomodation', '#37401B', 500);
  });
  accomodation.mouseleave(function(){
    $(this).css({'border-bottom': 'none'});
    hideSubMenu('#sub-accomodation', 'fast');
    $('#submenu-accomodation-picture').fadeOut('fast');
    $('#submenu-right-accomodation').css({
      display: 'none',
      left: 0
    });
  });

  $('#sub-accomodation').mouseover(function () {
    $('#submenu-right-accomodation')
    .css({display: 'block'})
    .animate({
      left: '2.5em'
    },800);
  });
// END ACCOMODATION

// SERVICES
  services.mouseenter(function () {
    showBorder(this, '#5101C0');
  });

  services.mouseleave(function () {
    hideBorder(this);
  });
// END SERVICES

// FACILITIES
  facilities.mouseenter(function () {
    showBorder(this, '#2BB4D1');
    showSubMenu('#sub-facilities', '#2BB4D1', 500);
  });

  facilities.mouseleave(function () {
    hideBorder(this);
    hideSubMenu('#sub-facilities', 'fast');
  });
// END FACILITIES

// ABOUT US
  aboutus.hover(function () {
    showBorder(this, '#9E5A7D');
    showSubMenu('#sub-aboutus', '#9E5A7D', 500);
  },function () {
    hideBorder(this);
    hideSubMenu('#sub-aboutus', "fast");
  });  
// END ABOUT US

});
