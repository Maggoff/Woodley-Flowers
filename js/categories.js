$(document).ready(function() {
  $("body").fadeIn(500);

$("a.transition").click(function(event){
  event.preventDefault();
  linkLocation = this.href;
  $("body").fadeOut(500, redirectPage);
});

function redirectPage() {
  window.location = linkLocation;
}
});

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

$('#orderModal').on('show.bs.modal', function (event) {
  let button = $(event.relatedTarget);
  let recipient = button.data('whatever');
  let modal = $(this);
  modal.find('.modal-title').text(`Хочеш замовити букет ${recipient}?`);
});

// $(document).ready(function(){
//   let img = document.getElementsByClassName('shop__item__img');
//   let text = document.getElementsByClassName('shop__item__text');
//   for (let i = 0; i<img.length; i++) {
//     let imgStyle = window.getComputedStyle(img[i], null).getPropertyValue("height");
//     text[i].style.height = imgStyle;
//   }
// });

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