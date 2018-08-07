$(document).ready(function () {
  var form = $('#form-subscribe');

  form.on('submit', function (e) {
    e.preventDefault()
    $.post("subscribe.php", $(form).serialize(), function (a) {
      form.addClass('form-hidden');


      $('.form-success').removeClass('form-hidden');
      $('.application__close').on('click', function () {
        $('.overlay-section').addClass('form-hidden')
      })
    })
  })

});