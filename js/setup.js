'use strict';

(function () {

  var similarListElement = document.querySelector('.setup-similar-list');// here insert array with wizards
  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
      .content
      .querySelector('.setup-similar-item');

  var getWizard = function (wizardsCount) {
    var wizards = [];
    for (var i = 0; i < wizardsCount; i++) {
      var wizard =
      {
        name: window.getRandom(window.util.WIZARD_NAMES) + ' ' + window.getRandom(window.util.WIZARD_SURNAMES),
        coatColor: window.getRandom(window.util.WIZARD_COAT_COLOR),
        eyesColor: window.getRandom(window.util.WIZARD_EYES_COLOR)
      };
      wizards.push(wizard);
    }
    return wizards;
  };

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
  window.util.setup.querySelector('.setup-similar').classList.remove('hidden');
})();


