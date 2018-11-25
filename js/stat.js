'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP_HEIGHT = 10;
var GAP_WIDTH = 50;
var BAR_WIDTH = 40;
var NAME_Y = 260;
var BAR_HEIGHT = 150;

var renderCloud = function(ctx, x, y , color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function(arr) {
  var maxElement = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

window.renderStatistics = function(ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP_HEIGHT, CLOUD_Y + GAP_HEIGHT , 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y , '#fff');

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', CLOUD_X + GAP_HEIGHT, CLOUD_Y * 4);
  ctx.fillText('Список результатов:', CLOUD_X + GAP_HEIGHT, CLOUD_Y * 6);

 var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    ctx.fillStyle = '#000';
    ctx.fillText(players[i], CLOUD_X + GAP_WIDTH + (GAP_WIDTH + BAR_WIDTH) * i, NAME_Y);

    ctx.fillText(Math.round(times[i]), CLOUD_X + GAP_WIDTH + (GAP_WIDTH + BAR_WIDTH) * i, CLOUD_HEIGHT - 3*GAP_HEIGHT- BAR_HEIGHT * times[i] / maxTime - 5);

    if (players[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
      ctx.fillRect(CLOUD_X + GAP_WIDTH + (GAP_WIDTH + BAR_WIDTH) * i, CLOUD_HEIGHT - 3*GAP_HEIGHT, BAR_WIDTH,- BAR_HEIGHT * times[i] / maxTime);
    }
    else {
      ctx.fillStyle = 'blue';
    }
    ctx.fillRect(CLOUD_X + GAP_WIDTH + (GAP_WIDTH + BAR_WIDTH) * i, CLOUD_HEIGHT - 3*GAP_HEIGHT, BAR_WIDTH, - BAR_HEIGHT * times[i] / maxTime);
  }
}

