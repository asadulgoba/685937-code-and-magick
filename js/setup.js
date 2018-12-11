'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARD_FIREBALL_COLOR = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;


var getRandom = function (items) {
  var item = items[Math.floor(Math.random() * items.length)];
  return item;
};

var getWizard = function (wizardsCount) {
  var wizards = [];
  for (var i = 0; i < wizardsCount; i++) {
    var wizard =
    {
      name: getRandom(WIZARD_NAMES) + ' ' + getRandom(WIZARD_SURNAMES),
      coatColor: getRandom(WIZARD_COAT_COLOR),
      eyesColor: getRandom(WIZARD_EYES_COLOR)
    };

    wizards.push(wizard);
  }
  return wizards;
};

var userDialog = document.querySelector('.setup');

var similarListElement = document.querySelector('.setup-similar-list');// here insert array with wizards
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

var randomWizard = getWizard(4);// array with 4 wizards

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var renderList = function () {
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < randomWizard.length; i++) {
    fragment.appendChild(renderWizard(randomWizard[i]));
  }
  return fragment;
};

similarListElement.appendChild(renderList());
userDialog.querySelector('.setup-similar').classList.remove('hidden');


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
