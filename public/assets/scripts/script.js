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