let bodyScrollBar = Scrollbar.init(document.body, { damping: 0.1, delegateTo: document });
 
bodyScrollBar.setPosition(0, 0);
bodyScrollBar.track.xAxis.element.remove();

ScrollTrigger.scrollerProxy(document.body, {
  scrollTop(value) {
    if (arguments.length) {
      bodyScrollBar.scrollTop = value;
    }
    return bodyScrollBar.scrollTop;
  }
});

bodyScrollBar.addListener(ScrollTrigger.update);





const horizontalSections = gsap.utils.toArray('section.horizontal')

horizontalSections.forEach(function (sec, i) {	
  
  var thisPinWrap = sec.querySelector('.pin-wrap');
  var thisAnimWrap = thisPinWrap.querySelector('.animation-wrap');
  
  var getToValue = () => -(thisAnimWrap.scrollWidth - window.innerWidth); 

  gsap.fromTo(thisAnimWrap, { 
    x: () => thisAnimWrap.classList.contains('to-right') ? 0 : getToValue() 
  }, { 
    x: () => thisAnimWrap.classList.contains('to-right') ? getToValue() : 0, 
    ease: "none",
    scrollTrigger: {
      trigger: sec,		
      scroller: document.body, // neccessary setting for smooth-scrollbar on body
      pinType: 'transform', // neccessary setting for smooth-scrollbar on body
      start: "top top",
      end: () => "+=" + thisAnimWrap.scrollWidth,
      pin: thisPinWrap,
      invalidateOnRefresh: true,
      anticipatePin: 1,
      scrub: true,
      //markers: true,
    }
  });

});	

// This part is only necessary if you're using ScrollTrigger's markers:
if (document.querySelector('.gsap-marker-scroller-start')) {		  
  const markers = gsap.utils.toArray('[class *= "gsap-marker"]');	
  bodyScrollBar.addListener(({ offset }) => gsap.set(markers, { marginTop: -offset.y }));
}
// End section necessary only if you're using ScrollTrigger's markers


// ScrollIntoView

function scrollAnimateBottom() {

  let elements = document.querySelectorAll('[data-gsap="scrollAnimateBottom"]');

  elements.forEach(ele => {

    // animation values
    let scaleVal = ele.getAttribute('data-gsap-scale') ?? 0;

    let opacityVal = ele.getAttribute('data-gsap-opacity') ?? 0;

    let easeVal = ele.getAttribute('data-gsap-ease') ?? "power1.out";

    let durationVal = ele.getAttribute('data-gsap-duration') ?? 3;

    let delayVal = ele.getAttribute('data-gsap-delay') ?? 0;

    // animation
    let anim = gsap.from(ele, {
      autoAlpha: opacityVal,
      scale: scaleVal,
      ease: easeVal,
      duration: durationVal,
      delay: delayVal,
    });

    // scroll values
    let startVal = ele.getAttribute('data-gsap-start') ?? "top bottom";

    let endVal = ele.getAttribute('data-gsap-end') ?? "center 70%";

    let scrubVal = ele.getAttribute('data-gsap-scrub') ?? 2;

    let onceVal = ele.getAttribute('data-gsap-once') ?? true;

    let immediateRenderVal = ele.getAttribute('data-gsap-immediaterender') ?? false;

    let markersVal = ele.getAttribute('data-gsap-markers') ?? false;

    // scroll
    ScrollTrigger.create({
      animation: anim,
      trigger: ele,
      start: startVal,
      end: endVal,
      scrub: scrubVal,
      once: onceVal,
      immediateRender: immediateRenderVal,
      markers: markersVal
    });

  });

} // .function

document.addEventListener("DOMContentLoaded", function (e) {
  scrollAnimateBottom();
});
