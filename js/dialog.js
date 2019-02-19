'use strict';

(function () {
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = document.querySelector('.setup-close');
  var setupUsername = document.querySelector('.setup-user-name');

  var onPopupEscPress = function (evt) {
    if (evt.keyCode === window.util.ESC_KEYCODE) {
      closePopup();
    }
  };

  var openPopup = function () {
    window.util.setup.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
  };

  var closePopup = function (evt) {
    if (setupUsername === document.activeElement) {
      return evt;
    } else {
      window.util.setup.classList.add('hidden');
      document.removeEventListener('keydown', onPopupEscPress);
      return true;
    }
  };

  var changeColorCoat = document.querySelector('.wizard .wizard-coat');
  var shiftInitialColorCoat = function () {
    var newColor = changeColorCoat.style.fill;
    window.wizard.onCoatChange(newColor);
  };


  var changeColorEyes = document.querySelector('.setup-wizard .wizard-eyes');
  var shiftInitialColorEyes = function () {
    var newColor = changeColorEyes.style.fill;
    window.wizard.onEyesChange(newColor);
  };


  setupOpen.addEventListener('click', function () {
    openPopup();
    window.setTimeout(shiftInitialColorCoat, 500);
    window.setTimeout(shiftInitialColorEyes, 500);
  });

  setupOpen.addEventListener('keydown', function (evt) {
    if (evt.keyCode === window.util.ENTER_KEYCODE) {
      openPopup();
    }
  });

  setupClose.addEventListener('click', function () {
    closePopup();
  });

  setupClose.addEventListener('keydown', function (evt) {
    if (evt.keyCode === window.util.ENTER_KEYCODE) {
      closePopup();
    }
  });
})();
