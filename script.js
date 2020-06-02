$(document).ready(function() {
  var movable = false,
    outline = $("#outline"),
    bio = $("#bio"),
    bioIcon = $("#bio-icon"),
    bioVisible = false,
    work = $("#work"),
    workIcon = $("#work-icon"),
    workVisible = false,
    translateFactor = 0.02,
    infoTranslateFactor = 0.4,
    winWidth = window.innerWidth,
    mobileView = window.innerWidth <= 600;

  window.onresize = () => {
    let newWinWidth = window.innerWidth;
    if (winWidth <= 600 && newWinWidth > 600) {
      mobileView = false;
    } else if (winWidth > 600 && newWinWidth <= 600) {
      mobileView = true;
    }
    winWidth = newWinWidth;
  };

  setInterval(function() {
    movable = true;
    setTimeout(function() {
      movable = false;
    }, 50);
  }, 250);

  $("body").mousemove(function(e) {
    if (movable) {
      followAnim(outline, translateFactor);
    }
    if (!mobileView) {
      if (bioVisible) {
        followAnim(bio, infoTranslateFactor);
      }
      if (workVisible) {
        followAnim(work, infoTranslateFactor);
      }
    }
  });

  workIcon.hover(function() {
    if (!workVisible) {
      work.css("display", "inline-block");
      gsap.to(work, { opacity: 1 });
      workVisible = true;
    }
  });

  work.mouseleave(function() {
    if (workVisible) {
      workVisible = false;
      gsap.to(work, {
        opacity: 0,
        onComplete: function() {
          work.css("display", "none");
        }
      });
    }
  });

  bioIcon.hover(function() {
    if (!bioVisible) {
      bio.css("display", "inline-block");
      gsap.to(bio, { opacity: 1 });
      bioVisible = true;
    }
  });
  bio.mouseout(function() {
    if (bioVisible) {
      bioVisible = false;
      gsap.to(bio, {
        opacity: 0,
        onComplete: function() {
          bio.css("display", "none");
        }
      });
    }
  });

  $(".home__link").hover(function() {
    var link = $(this);
    if (
      link.attr("hovered") === undefined ||
      link.attr("hovered") === "false"
    ) {
      var newSrc = link.attr("src").replace(".png", "_hover.png");
      link.attr({ src: newSrc, hovered: true });
    }
  });
  $(".home__link").mouseleave(function() {
    var link = $(this);
    if (link.attr("hovered") === "true") {
      var newSrc = link.attr("src").replace("_hover", "");
      link.attr({ src: newSrc, hovered: false });
    }
  });
});

function followAnim(elem, translateFactor) {
  translateX = (event.clientX - window.innerWidth / 2) * translateFactor;
  translateY = (event.clientY - window.innerHeight / 2) * translateFactor;
  gsap.to(elem, {
    x: translateX,
    y: translateY,
    duration: 1.5
  });
}
