'use strict';

(window.getRandom = function (items) {
  return items[Math.floor(Math.random() * items.length)];
});
