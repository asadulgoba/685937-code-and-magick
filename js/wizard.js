'use strict';
(function () {

  window.wizard = {
    onEyesChange: function () {},
    onCoatChange: function () {}
  };

  var changeColorCoat = document.querySelector('.wizard .wizard-coat');
  var chahgeColorCoatInput = document.querySelector('[name="coat-color"]');

  var shiftColorCoat = function () {
    var newColor = window.getRandom(window.util.WIZARD_COAT_COLOR);
    changeColorCoat.style.fill = newColor;
    chahgeColorCoatInput.value = newColor;
    window.wizard.onCoatChange(newColor);
  };

  changeColorCoat.addEventListener('click', shiftColorCoat);

  var changeColorEyes = document.querySelector('.setup-wizard .wizard-eyes');
  var chahgeColorEyesInput = document.querySelector('[name="eyes-color"]');

  changeColorEyes.addEventListener('click', function () {
    var newColor = window.getRandom(window.util.WIZARD_EYES_COLOR);
    changeColorEyes.style.fill = newColor;
    chahgeColorEyesInput.value = newColor;
    window.wizard.onEyesChange(newColor);
  });

  var changeColorFireball = document.querySelector('.setup-fireball-wrap');
  var chahgeColorFireballInput = document.querySelector('[name="fireball-color"]');

  changeColorFireball.addEventListener('click', function () {
    var fireballColor = window.getRandom(window.util.WIZARD_FIREBALL_COLOR);
    changeColorFireball.style.background = fireballColor;
    chahgeColorFireballInput.value = fireballColor;
  });
})();
