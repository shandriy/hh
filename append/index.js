"use strict";

var main = {};
main.init = function() {
  document.getElementsByTagName("p")[0].remove();
  document.getElementsByTagName("noscript")[0].remove();

  var aspectRatio = 5 / 3;

  var canvas = document.getElementsByTagName("canvas")[0];
  window.addEventListener("resize", function() {
    var screenWidth = window.innerWidth;
    var screenHeight = window.innerHeight;
    var screenAspectRatio = screenWidth / screenHeight;

    var width = 500;
    var height = 300;

    if (screenAspectRatio < aspectRatio) {
      width = screenWidth;
      height = screenWidth / aspectRatio;

      canvas.style.left = "0px";
      canvas.style.top = (screenHeight - height) / 2 + "px";
    } else {
      height = screenHeight;
      width = screenHeight * aspectRatio;

      canvas.style.top = "0px";
      canvas.style.left = (screenWidth - width) / 2 + "px";
    };

    width = Math.round(width);
    height = Math.round(height);
    canvas.setAttribute("width", width);
    canvas.setAttribute("height", height);
    canvas.style.width = width + "px";
    canvas.style.height = height + "px";
  });
};