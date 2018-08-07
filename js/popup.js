(function () {
    var buttonOpen = document.querySelectorAll('.get-ticket');
    var overlayHidden = document.querySelector('.overlay-section');
    var buttonClose = document.querySelector('.application__close');
    var priceRadioButton = document.querySelector('.price-radio-button');

  if (buttonOpen) {
    for (var i = 0; i < buttonOpen.length; i++) {
      buttonOpen[i].addEventListener("click", function (event) {
        event.preventDefault();$(this).closest('.pricing-s1')
        priceRadioButton.value = $(this).closest('.pricing-s1').attr('data-target')
        overlayHidden.classList.remove('form-hidden');
      })
    }
  }

    buttonClose.addEventListener('click', function () {
      overlayHidden.classList.add('form-hidden');
    })
}());