// gsap.registerPlugin(ScrollTrigger);

let tl = gsap.timeline();

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
  // scrollTrigger: {
  //   trigger: ".home",
  //   pin: true, // pin the trigger element while active
  //   start: "top bottom", // when the top of the trigger hits the top of the viewport
  //   end: "+=200", // end after scrolling 500px beyond the start
  //   scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
  //   snap: {
  //     snapTo: "labels", // snap to the closest label in the timeline
  //     duration: { min: 0.2, max: 3 }, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
  //     delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
  //     ease: "power1.inOut", // the ease of the snap animation ("power3" by default)
  //   },
  // },
});

gsap.from(".content-about", {
  x: -20,
  y: -50,
  opacity: 0,
  duration: 2,
});
