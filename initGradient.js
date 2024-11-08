document.addEventListener("DOMContentLoaded", function() {
  if (typeof Color4Bg !== "undefined" && Color4Bg.BlurGradientBg) {
    let colorbg = new Color4Bg.BlurGradientBg({
      dom: "box",
      colors: ["#1c1c1c", "#1c1c1c", "#6fcb78", "#1c1c1c"],
      loop: true
    });
  }
});
