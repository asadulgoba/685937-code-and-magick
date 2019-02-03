'use strict';

(function () {
  var WIZARD_COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var WIZARD_EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
  var WIZARD_FIREBALL_COLOR = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;

  var getRandom = function (items) {
    var item = items[Math.floor(Math.random() * items.length)];
    return item;
  };

  var setupOpen = document.querySelector('.setup-open');
  var setupClose = document.querySelector('.setup-close');
  var setup = document.querySelector('.setup');
  var setupUsername = document.querySelector('.setup-user-name');

  var onPopupEscPress = function (evt) {
    if (evt.keyCode === ESC_KEYCODE) {
      closePopup();
    }
  };

  var openPopup = function () {
    setup.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
  };

  var closePopup = function (evt) {
    if (setupUsername === document.activeElement) {
      return evt;
    } else {
      setup.classList.add('hidden');
      document.removeEventListener('keydown', onPopupEscPress);
      return true;
    }
  };

  setupOpen.addEventListener('click', function () {
    openPopup();
  });

  setupOpen.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
      openPopup();
    }
  });

  setupClose.addEventListener('click', function () {
    closePopup();
  });

  setupClose.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
      closePopup();
    }
  });

  var changeColorCoat = document.querySelector('.wizard .wizard-coat');
  var chahgeColorCoatInput = document.querySelector('[name="coat-color"]');
  changeColorCoat.addEventListener('click', function () {
    var coatColor = getRandom(WIZARD_COAT_COLOR);
    changeColorCoat.style.fill = coatColor;
    chahgeColorCoatInput.value = coatColor;
  });

  var changeColorEyes = document.querySelector('.setup-wizard .wizard-eyes');
  var chahgeColorEyesInput = document.querySelector('[name="eyes-color"]');
  changeColorEyes.addEventListener('click', function () {
    var eyesColor = getRandom(WIZARD_EYES_COLOR);
    changeColorEyes.style.fill = eyesColor;
    chahgeColorEyesInput.value = eyesColor;
  });

  var changeColorFireball = document.querySelector('.setup-fireball-wrap');
  var chahgeColorFireballInput = document.querySelector('[name="fireball-color"]');
  changeColorFireball.addEventListener('click', function () {
    var fireballColor = getRandom(WIZARD_FIREBALL_COLOR);
    changeColorFireball.style.background = fireballColor;
    chahgeColorFireballInput.value = fireballColor;
  });


  var dialogHandler = setup.querySelector('.upload');

  dialogHandler.addEventListener('mousedown', function (evt) {
    evt.preventDefault();

    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    var dragged = false;

    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();
      dragged = true;

      var shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      setup.style.top = (setup.offsetTop - shift.y) + 'px';
      setup.style.left = (setup.offsetLeft - shift.x) + 'px';
    };

    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);

      if (dragged) {
        var onClickPreventDefault = function (clickevt) {
          clickevt.preventDefault();
          dialogHandler.removeEventListener('click', onClickPreventDefault);
        };
        dialogHandler.addEventListener('click', onClickPreventDefault);
      }
    };
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });
})();
