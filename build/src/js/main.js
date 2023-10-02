// GSAP 
// gsap.to(".hero", {
//   yPercent: -100,
//   ease: "none",
//   scrollTrigger: {
//     trigger: ".hero",
//     // start: "top bottom", // the default values
//     // end: "bottom top",
//     scrub: true
//   }, 
// });

// gsap.to("#earf", {
//   yPercent: 50,
//   ease: "none",
//   scrollTrigger: {
//     trigger: ".hero",
//     // start: "top bottom", // the default values
//     // end: "bottom top",
//     scrub: true
//   }, 
// });


// MOBILE NAV BEHAVIOR





// Homepage Slide Effect 
// gsap.registerPlugin(ScrollTrigger);

// ScrollTrigger.defaults({
//   toggleActions: "restart pause resume pause",
//   scroller: ".container"
// });

// gsap.to(".panel", {
//   scrollTrigger: "#stats", 
//   duration: 2, 
//   rotation: 360
// });

// gsap.to(".panel", {
//   scrollTrigger: {
//     trigger: "#about",
//     toggleActions: "restart pause reverse pause"
//   }, 
//   duration: 1, 
//   backgroundColor: "#FFA500", 
//   ease: "none"
// });

// gsap.to("#meta", {
//   scrollTrigger: ".panel", 
//   scale: 2, 
//   repeat: -1, 
//   yoyo: true, 
//   ease: "power2"
// });

// gsap.to("#laws", {
//   scrollTrigger: ".panel", 
//   scale: 2, 
//   repeat: -1, 
//   yoyo: true, 
//   ease: "power2"
// });

// gsap.to("#logowall", {
//   scrollTrigger: ".panel", 
//   scale: 2, 
//   repeat: -1, 
//   yoyo: true, 
//   ease: "power2"
// });

// gsap.to("#contact", {
//   scrollTrigger: ".panel", 
//   scale: 2, 
//   repeat: -1, 
//   yoyo: true, 
//   ease: "power2"
// });



// gsap.registerPlugin(ScrollTrigger);

// let panels = gsap.utils.toArray(".panel");
// // we'll create a ScrollTrigger for each panel just to track when each panel's top hits the top of the viewport (we only need this for snapping)
// let tops = panels.map(panel => ScrollTrigger.create({trigger: panel, start: "top top"}));

// panels.forEach((panel, i) => {
//   ScrollTrigger.create({
//     trigger: panel,
//     start: () => panel.offsetHeight < window.innerHeight ? "top top" : "bottom bottom", // if it's shorter than the viewport, we prefer to pin it at the top
//     pin: true, 
//     pinSpacing: true 
//   });
// });

// ScrollTrigger.create({
//   snap: {
//     snapTo: (progress, self) => {
//       let panelStarts = tops.map(st => st.start), // an Array of all the starting scroll positions. We do this on each scroll to make sure it's totally responsive. Starting positions may change when the user resizes the viewport
//           snapScroll = gsap.utils.snap(panelStarts, self.scroll()); // find the closest one
//       return gsap.utils.normalize(0, ScrollTrigger.maxScroll(window), snapScroll); // snapping requires a progress value, so convert the scroll position into a normalized progress value between 0 and 1
//     },
//     duration: 0.5
//   }
// });


// gsap.registerPlugin(ScrollTrigger);

// let sections = gsap.utils.toArray(".panel");

// gsap.to(sections, {
//   xPercent: -100 * (sections.length - 1),
//   ease: "none",
//   scrollTrigger: {
//     trigger: ".panel-container",
//     pin: true,
//     scrub: 1,
//     snap: 1 / (sections.length - 1),
//     // base vertical scrolling on how wide the container is so it feels more natural.
//     end: "+=3500",
//   }
// });



/* CASE STUDIES  */

/* TILT JS ELEMENTS  */

// $('.js-tilt').tilt({
//     scale: 1.2
// })




// LAW SECTION HOVER REVEALS 

let reveal = document.querySelectorAll(".reveal");
let down = document.querySelectorAll(".chevronDwn");
let up = document.querySelectorAll(".chevronUp");
let outerBlock = document.querySelectorAll(".outerBlock");

 for (let i = 0; i < outerBlock.length; i++) {
     outerBlock[i].addEventListener("click", function() {
       reveal[i].classList.toggle("shown");
       up[i].classList.toggle("hidden");
       down[i].classList.toggle("hidden");
     });
 }

// for(let i = 0; i < outerBlock.length; i++) {
    
// };