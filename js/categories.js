$(document).ready(function(){
  $("#menu").on("click","a", function (event) {
      event.preventDefault();
      var id  = $(this).attr('href'),
          top = $(id).offset().top;
      $('body,html').animate({scrollTop: top}, 600);
  });
});

$(document).on('click', '.checkbox__item .checkbox__item__label', function (e) {
  e.stopPropagation();
});

$(document).ready(function() {
  $("body").css("display", "none");

  $("body").fadeIn(300);

$("a.transition").click(function(event){
  event.preventDefault();
  linkLocation = this.href;
  $("body").fadeOut(300, redirectPage);
});

function redirectPage() {
  window.location = linkLocation;
}
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