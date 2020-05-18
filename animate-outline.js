$(document).ready(function() {
  let movable = false,
    outline = $("#outline");
  let translateFactor = 0.02;
  setInterval(() => {
    movable = true;
    setTimeout(() => {
      movable = false;
    }, 50);
  }, 250);
  $("body").mousemove(function(e) {
    if (movable) {
      translateX = (event.clientX - window.innerWidth / 2) * translateFactor;
      translateY = (event.clientY - window.innerHeight / 2) * translateFactor;
      gsap.to(outline, {
        x: translateX,
        y: translateY,
        duration: 1.5
      });
    }
  });
});
