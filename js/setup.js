'use strict';

(function () {

  var similarListElement = document.querySelector('.setup-similar-list');// here insert array with wizards
  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
      .content
      .querySelector('.setup-similar-item');

  // var getWizard = function (wizardsCount) {
    var wizards = [];
  //   for (var i = 0; i < wizardsCount; i++) {
  //     var wizard =
  //     {
  //       name: window.getRandom(window.util.WIZARD_NAMES) + ' ' + window.getRandom(window.util.WIZARD_SURNAMES),
  //       coatColor: window.getRandom(window.util.WIZARD_COAT_COLOR),
  //       eyesColor: window.getRandom(window.util.WIZARD_EYES_COLOR)
  //     };
  //     wizards.push(wizard);
  //   }
  //   return wizards;
  // };

  // var randomWizard = getWizard(4);// array with 4 wizards

  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;
    return wizardElement;
  };

  var form = window.util.setup.querySelector('.setup-wizard-form');
  form.addEventListener('submit', function (evt) {
    window.backend.save(new FormData(form), function (response) {
      window.util.setup.classList.add('hidden');
    });
    evt.preventDefault();
  });



  var successHandler = function (wizards) {
    var fragment = document.createDocumentFragment();

    for (var i = 8; i < 12; i++) {
      fragment.appendChild(renderWizard(wizards[i]));
    }
    similarListElement.appendChild(fragment);

    window.util.setup.querySelector('.setup-similar').classList.remove('hidden');
  };

  var errorHandler = function (errorMessage) {
    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';
console.log('ne ponyal')

    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  };

window.backend.load(successHandler, errorHandler);


  // window.load(function (wizards) {
  //   var fragment = document.createDocumentFragment();

  //   for (var i = 5; i < 9; i++) {
  //     fragment.appendChild(renderWizard(wizards[i]));
  //   }
  //   similarListElement.appendChild(fragment);

  //   window.util.setup.querySelector('.setup-similar').classList.remove('hidden');
  // });


})();


