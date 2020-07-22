$(document).ready(function(){
  $('.portfolio__slider').slick({
    centerMode: true,
    centerPadding: '0px',
    slidesToShow: 5,
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
    focusOnSelect: true,
    swipe: false,
  });
});