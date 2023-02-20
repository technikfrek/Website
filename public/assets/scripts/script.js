// =======================// Begin Smooth Scrollbar// =======================

if ($("body").hasClass("smooth-scroll")) {
	// Init Smooth Scrollbar
	// ======================
	var Scrollbar = window.Scrollbar;
	Scrollbar.init(document.querySelector("#scroll-container"), {
		damping: 0.05,
		renderByPixel: true,
		continuousScrolling: true,
		alwaysShowTracks: true,
	});

	// 3rd party library setup
	// More info: https://greensock.com/docs/v3/Plugins/ScrollTrigger/static.scrollerProxy()
	// ========================
	let scrollPositionX = 0,
		scrollPositionY = 0,
		bodyScrollBar = Scrollbar.init(document.getElementById("scroll-container"));

	bodyScrollBar.addListener(({offset}) => {
		scrollPositionX = offset.x;
		scrollPositionY = offset.y;
	});

	bodyScrollBar.setPosition(0, 0);
	bodyScrollBar.track.xAxis.element.remove();

	// Tell ScrollTrigger to use these proxy getter/setter methods for the "body" element:
	ScrollTrigger.scrollerProxy("body", {
		scrollTop(value) {
			if (arguments.length) {
				bodyScrollBar.scrollTop = value;
			}
			return bodyScrollBar.scrollTop;
		},
	});

	// when smooth scroller updates, tell ScrollTrigger to update() too.
	bodyScrollBar.addListener(ScrollTrigger.update);
}

// =======================
// End Smooth Scrollbar
// =======================

// ScrollTrigger horizontal scroll
// ================================
const horizontalSections = gsap.utils.toArray("section.horizontal");

horizontalSections.forEach(function (sec, i) {
	var thisPinWrap = sec.querySelector(".pin-wrap");
	var thisAnimWrap = thisPinWrap.querySelector(".animation-wrap");
	var sections = gsap.utils.toArray(".horizontal-item");
	var cards = gsap.utils.toArray(".card");

	var getToValue = () => -(thisAnimWrap.scrollWidth - window.innerWidth);

	var scrollTween = gsap.fromTo(
		thisAnimWrap,
		{
			x: () => (thisAnimWrap.classList.contains("to-right") ? getToValue() : 0),
		},
		{
			x: () => (thisAnimWrap.classList.contains("to-right") ? 0 : getToValue()),
			ease: "none", // <-- IMPORTANT!
			scrollTrigger: {
				trigger: sec,
				scroller: document.body, // neccessary setting for smooth-scrollbar on body
				pinType: "transform", // neccessary setting for smooth-scrollbar on body
				start: "top top",
				end: "+=5000",
				pin: thisPinWrap,
				invalidateOnRefresh: true,
				anticipatePin: 1,
				scrub: 1,
				// markers: true,
			},
		}
	);

	// Add class to active item
	// =========================
	sections.forEach((sct, i) => {
		ScrollTrigger.create({
			trigger: sct,
			containerAnimation: scrollTween,
			start: "0% 50%",
			end: "100% 50%",
			toggleClass: {targets: sct, className: "active"},
			// markers: true,
		});
	});
	cards.forEach((sct, i) => {
		ScrollTrigger.create({
			trigger: sct,
			containerAnimation: scrollTween,
			start: "0% 50%",
			end: "100% 50%",
			toggleClass: {targets: sct, className: "active"},
			// markers: true,
		});
	});
});

// =======================

const popupButtons = document.querySelectorAll(".popupLink");
for (let i = 0; i < popupButtons.length; i++) {
	popupButtons[i].addEventListener("click", function (e) {
		e.preventDefault();
		const popupID = this.getAttribute("data-popup");
		console.log(popupID);
		const popup = document.querySelector(popupID);
		console.log(popup);
		popup.classList.add("active");
	});
}
const popupCloseButtons = document.querySelectorAll(".popup__closer");
for (let i = 0; i < popupCloseButtons.length; i++) {
	popupCloseButtons[i].addEventListener("click", function (e) {
		const popupID = this.getAttribute("data-popup-close");
		console.log(popupID);
		const popup = document.querySelector(popupID);
		console.log(popup);
		popup.classList.remove("active");
	});
}


// function smoothScrollTo(target, duration) {
// 	var target = document.querySelector(target);
// 	var targetPosition = target.getBoundingClientRect().top;
// 	var startPosition = window.pageYOffset;
// 	var distance = targetPosition - startPosition;
// 	var startTime = null;
// 	console.log(targetPosition);
// 	bodyScrollBar.scrollTo(targetPosition, 0, duration);
// }
// smoothScrollTo("#Dienstleistungen", 1000);
// =======================

function wait(ms = 0) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

// wait(1000).then(() => {
// 	console.clear();
// 	console.log(
// 		"%c Made by Moritz Pfeffer Mediadesign",
// 		"font-family: 'Montserrat', sans-serif; font-size: 1.5rem; color: #fff; background: #000; padding: 1rem; border-radius: 1rem; margin-top: 1rem;"
// 	);
// 	console.log(
// 		"%c Technologies used: \njQuery - because it saves time \nGSAP - because ❤ \nScrollTrigger - for scroll-based animations \nSmooth-Scrollbar - for smooth scrolling \nWebGL(THREE.js) - for 3d glass spheres\nSpline - a 3d WebGL Editor",
// 		"font-family: 'Montserrat', sans-serif; font-size: 1rem; color: #fff; background: #000; padding: 1rem; border-radius: 1rem; margin-top: 1rem;"
// 	);
// 	console.log(
// 		"%c Built using Astro.build, a static site generator for the modern web.",
// 		"font-family: 'Montserrat', sans-serif; font-size: 1rem; color: #fff; background: #000; padding: 1rem; border-radius: 1rem; margin-top: 1rem;"
// 	);
// 	console.warn(
// 		"%c Like my work? Feel free to contact me via email: \ninfo@moritzpfeffermedia.de",
// 		"font-family: 'Montserrat', sans-serif; font-size: 1rem; color: #fff; background: #000; padding: 1rem; border-radius: 1rem; margin-top: 1rem;"
// 	);

// });
