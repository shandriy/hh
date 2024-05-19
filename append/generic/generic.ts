"use strict";

var gen = {
  canvas: document.createElement("canvas"),
  context: document.createElement("canvas").getContext("2d"),

  deltaTime: 13,
  lastFrame: 0,
  frame: function() {
    var now = Date.now();
    gen.deltaTime = now - gen.lastFrame;
    gen.lastFrame = now;
  },
  init: function() {
    try {
      document.getElementsByTagName("p")[0].remove();
      document.getElementsByTagName("noscript")[0].remove();
    } catch (error) {
      document.getElementsByTagName("p")[0].innerHTML = "";
    };

    var aspectRatio = out.canvas.aspectRatio;

    gen.canvas = document.getElementsByTagName("canvas")[0];
    gen.context = gen.canvas.getContext("2d", { alpha: false });
    function onResize() {
      var screenWidth = window.innerWidth;
      var screenHeight = window.innerHeight;
      var screenAspectRatio = screenWidth / screenHeight;

      var width = out.canvas.unitWidth;
      var height = out.canvas.unitHeight;

      if (screenAspectRatio < aspectRatio) {
        width = screenWidth;
        height = screenWidth / aspectRatio;

        gen.canvas.style.left = "0px";
        gen.canvas.style.top = (screenHeight - height) / 2 + "px";
      } else {
        height = screenHeight;
        width = screenHeight * aspectRatio;

        gen.canvas.style.top = "0px";
        gen.canvas.style.left = (screenWidth - width) / 2 + "px";
      };

      width = Math.round(width);
      height = Math.round(height);
      gen.canvas.setAttribute("width", width.toString());
      gen.canvas.setAttribute("height", height.toString());
      gen.canvas.style.width = width + "px";
      gen.canvas.style.height = height + "px";
      gen.context!.fillStyle = "#fff";
      gen.context!.fillRect(0, 0, width, height);

      out.canvas.width = width;
      out.canvas.height = height;
    }
    window.addEventListener("resize", onResize);
    window.addEventListener("focus", onResize);
    onResize();

    window.setInterval(gen.frame);
  }
};