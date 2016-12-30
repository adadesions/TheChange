$(document).ready(function () {
   //initialize swiper when document ready
   var greetingSwiper = new Swiper ('#greeting-section-slide', {
     // Optional parameters
     direction: 'horizontal',
     speed: 1000,
     autoplay: 2000,
     effect: 'cube',
     parallax: true,
     grabCursor: true,
     touchEventsTarget: '.swiper-container',
     lazyLoading: true,
     loop: true
   });

   var roomSwiper = new Swiper('#room-section', {
     parallax: true,
     speed: 800,
     nextButton: '.swiper-button-next',
     prevButton: '.swiper-button-prev',
     loop: true,
     autoplay: 2500
   });
  });
