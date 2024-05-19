"use strict";

var out = {
  canvas: {
    unitWidth: 500,
    unitHeight: 300,
    aspectRatio: 5 / 3,
    width: 500,
    height: 300,
  }
};

out.canvas.image = function(image, x, y, scaleX, scaleY) {
  var convertX = out.canvas.unitWidth * out.canvas.width;
  var convertY = out.canvas.unitHeight * out.canvas.height;
  gen.context.drawImage(
    image,
    Math.round((x + (out.canvas.unitWidth / 2)) / convertX),
    Math.round((y + (out.canvas.unitHeight / 2)) / convertY),
    image.width * scaleX / convertX,
    image.height * scaleY / convertY
  );
}