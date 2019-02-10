'use strict';
(function () {

  var changeColorCoat = document.querySelector('.wizard .wizard-coat');
  var chahgeColorCoatInput = document.querySelector('[name="coat-color"]');

  changeColorCoat.addEventListener('click', function () {
    var coatColor = window.getRandom(window.util.WIZARD_COAT_COLOR);
    changeColorCoat.style.fill = coatColor;
    chahgeColorCoatInput.value = coatColor;
  });

  var changeColorEyes = document.querySelector('.setup-wizard .wizard-eyes');
  var chahgeColorEyesInput = document.querySelector('[name="eyes-color"]');

  changeColorEyes.addEventListener('click', function () {
    var eyesColor = window.getRandom(window.util.WIZARD_EYES_COLOR);
    changeColorEyes.style.fill = eyesColor;
    chahgeColorEyesInput.value = eyesColor;
  });

  var changeColorFireball = document.querySelector('.setup-fireball-wrap');
  var chahgeColorFireballInput = document.querySelector('[name="fireball-color"]');

  changeColorFireball.addEventListener('click', function () {
    var fireballColor = window.getRandom(window.util.WIZARD_FIREBALL_COLOR);
    changeColorFireball.style.background = fireballColor;
    chahgeColorFireballInput.value = fireballColor;
  });
})();
