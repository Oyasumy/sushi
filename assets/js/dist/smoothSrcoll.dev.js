"use strict";

// All animations will take exactly 500ms
var scroll = new SmoothScroll('a[href*="#"]', {
  speed: 500,
  speedAsDuration: true
});
gsap.registerPlugin(ScrollTrigger, ScrollSmoother); // create

var mm = gsap.matchMedia(); // add a media query. When it matches, the associated function will run

mm.add("(min-width: 600px)", function () {
  if (ScrollTrigger.isTouch === 0) {
    ScrollSmoother.create({
      content: "#main",
      smooth: 2,
      ignoreMobileResize: true,
      effects: true
    });
  }

  return function () {
    var wrapper = document.querySelector(".ScrollSmoother-wrapper");
    wrapper.outerHTML = wrapper.innerHTML;
  };
});