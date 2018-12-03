'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COATCOLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYESCOLOR = ['black', 'red', 'blue', 'yellow', 'green'];

var getRandom = function (items) {
  var item = items[Math.floor(Math.random() * items.length)];
  return item;
};

var getWizard = function (numberWizards) {
  var wizards = [];
  for (var i = 0; i < numberWizards; i++) {
    var wizard =
    {
      name: getRandom(WIZARD_NAMES) + ' ' + getRandom(WIZARD_SURNAMES),
      coatColor: getRandom(WIZARD_COATCOLOR),
      eyesColor: getRandom(WIZARD_EYESCOLOR)
    };

    wizards.push(wizard);
  }
  return wizards;
};

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');// here insert array with wizards
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

var randWiz = getWizard(4);// array with 4 wizards

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();

for (var i = 0; i < randWiz.length; i++) {
  fragment.appendChild(renderWizard(randWiz[i]));
}

similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');
