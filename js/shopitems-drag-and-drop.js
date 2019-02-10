'use strict';

(function () {
  var shopElement = document.querySelector('.setup-artifacts-shop');
  var artifactsElement = document.querySelector('.setup-artifacts');
  var draggedItem = null;

  var artifactElementDrag = function (elem) {
    elem.addEventListener('dragstart', function (evt) {
      if (evt.target.tagName.toLowerCase() === 'img') {
        draggedItem = evt.target;
        evt.dataTransfer.setData('text/plain', evt.target.alt);
        evt.target.style.transform = 'scale(2)';
      }
    });
  };

  var artifactElementDrop = function (element) {
    element.addEventListener('dragover', function (evt) {
      evt.preventDefault();
      return false;
    });

    element.addEventListener('drag', function (evt) {
      evt.target.style.transform = 'scale(1)';
    });

    element.addEventListener('drop', function (evt) {
      evt.target.style.backgroundColor = '';
      evt.target.appendChild(draggedItem);
      draggedItem.style.transform = 'scale(1)';
    });

    element.addEventListener('dragenter', function (evt) {
      evt.target.style.backgroundColor = 'white';
      shopElement.style.backgroundColor = '';
      evt.preventDefault();
    });

    element.addEventListener('dragleave', function (evt) {
      evt.target.style.backgroundColor = '';
      evt.preventDefault();
    });
  };

  artifactElementDrag(shopElement);
  artifactElementDrag(artifactsElement);

  artifactElementDrop(shopElement);
  artifactElementDrop(artifactsElement);
})();
