$(document).ready(function () {
  var width = $(window).width();
  var height = $(window).height();
  console.log(width);
   if( width <= 1024)
   {
     var greetingSwiper = new Swiper ('#greeting-section-slide', {
       // Optional parameters
       direction: 'horizontal',
       speed: 1000,
       autoplay: 2000,
       effect: 'fade',
       parallax: true,
       grabCursor: true,
       touchEventsTarget: '.swiper-container',
       lazyLoading: true,
       loop: true
     });
   }
   else
   {
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
   }


   var roomSwiper = new Swiper('#room-section', {
     parallax: true,
     speed: 800,
     nextButton: '.swiper-button-next',
     prevButton: '.swiper-button-prev',
     loop: true,
     autoplay: 2500
   });

   var bedroomSwiper = new Swiper('#bedroom-slide', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflow: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows : true
        },
        loop: true
   });

   var servicesSwiper = new Swiper('#services-page', {
     parallax: true,
     speed: 800,
     nextButton: '.swiper-button-next',
     prevButton: '.swiper-button-prev',
     loop: true,
     autoplay: 2500
   });

   var facilitiesSwiper = new Swiper('#facilities-page', {
     parallax: true,
     speed: 800,
     nextButton: '.swiper-button-next',
     prevButton: '.swiper-button-prev',
     loop: true,
     autoplay: 2500
   });

   var facilitiesSlideSwiper = new Swiper('#facilities-slide', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflow: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows : true
        },
        loop: true
   });
});
