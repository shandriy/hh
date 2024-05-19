"use strict";

var gen = {
  init: function() {
    try {
      document.getElementsByTagName("p")[0].remove();
      document.getElementsByTagName("noscript")[0].remove();
    } catch (error) {
      document.getElementsByTagName("p")[0].innerHTML = "";
    };

    var aspectRatio = out.canvas.aspectRatio;

    var canvas = document.getElementsByTagName("canvas")[0];
    var context = canvas.getContext("2d", { alpha: false });
    function onResize() {
      var screenWidth = window.innerWidth;
      var screenHeight = window.innerHeight;
      var screenAspectRatio = screenWidth / screenHeight;

      var width = out.canvas.unitWidth;
      var height = out.canvas.unitHeight;

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
      canvas.setAttribute("width", width.toString());
      canvas.setAttribute("height", height.toString());
      canvas.style.width = width + "px";
      canvas.style.height = height + "px";
      context!.fillStyle = "#fff";
      context!.fillRect(0, 0, width, height);

      out.canvas.width = width;
      out.canvas.height = height;
    }
    window.addEventListener("resize", onResize);
    window.addEventListener("focus", onResize);
    onResize();
  }
};