ScrollSmoother.create({
  wrapper: "#main",
  content: "#main",
  smooth: 1,
  ignoreMobileResize: true,
  effects: ScrollTrigger.isTouch === 1 ? false : true,
});

gsap.from(".content-home", {
  x: -100,
  y: -50,
  opacity: 0,
  duration: 2,
});

gsap.from(".img-main", {
  x: 100,
  y: 50,
  opacity: 0,
  duration: 2,
});

gsap.from("#header", {
  //   x: 20,
  //   y: -50,
  opacity: 0,
  duration: 2,
});

gsap.from(".img-about", {
  x: 20,
  y: -50,
  opacity: 0,
  duration: 2,
});

gsap.from(".content-about", {
  x: -20,
  y: -50,
  opacity: 0,
  duration: 2,
});
