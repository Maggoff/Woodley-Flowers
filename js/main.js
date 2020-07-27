$(document).ready(function(){
  $("#menu").on("click","a", function (event) {
      event.preventDefault();
      var id  = $(this).attr('href'),
          top = $(id).offset().top;
      $('body,html').animate({scrollTop: top}, 600);
  });
});


$(document).ready(function(){
  $('.portfolio__slider').slick({
    centerMode: true,
    centerPadding: '0px',
    slidesToShow: 5,
    prevArrow: '<button type="button" class="slick-prev" onclick="myfunction()"></button>',
    nextArrow: '<button type="button" class="slick-next" onclick="myfunction()"></button>',
    focusOnSelect: true,
    variableWidth: true,
    adaptiveHeight: true,
    swipe: false,
    responsive: [
      {
        breakpoint: 1030,
        settings: {
          arrows: false,
          centerMode: true,
          dots: true,
          centerPadding: '0px',
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      }
    ]
  });
});

$(document).on('click', '.checkbox__item .checkbox__item__label', function (e) {
  e.stopPropagation();
});

let slider = document.getElementById('range');

noUiSlider.create(slider, {
    start: [550, 1290],
    connect: true,
    step: 1,
    range: {
        'min': 500,
        'max': 3000
    }
});

let valuesDivs = [
  document.getElementById('range__min'),
  document.getElementById('range__max')
];

range.noUiSlider.on('update', function (values, handle) {
  valuesDivs[handle].value = Math.trunc( values[handle] );
});