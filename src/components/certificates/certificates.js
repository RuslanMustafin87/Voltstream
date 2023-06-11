import Swiper, { A11y, Navigation, FreeMode } from "swiper";

const buttonLeft = document.querySelector(".certificates__button-left");
const buttonRight = document.querySelector(".certificates__button-right");

// eslint-disable-next-line no-unused-vars
const swiperCertificates = new Swiper(".swiper-certificates", {
	modules: [A11y, Navigation, FreeMode],
	a11y: true,
	navigation: {
		nextEl: "#certificates-button-next",
		prevEl: "#certificates-button-prev",
	},
	speed: 400,
	freeMode: true,
	autoHeight: true,
	// centeredSlides: true,
	// eslint-disable-next-line no-dupe-keys
	spaceBetween: 20,
	slidesPerView: "auto",
	slidesPerGroup: 1,
	// slidesPerGroupAuto: true,
	on: {
		init: function (e) {
			e.isEnd = false;
		},
		toEdge: function (e) {
			if (e.isBeginning) {
				buttonLeft.style.opacity = "0.4";
			}
			if (e.isEnd && e.isBeginning !== true) {
				buttonRight.style.opacity = "0.4";
			}
		},
		fromEdge: function () {
			buttonLeft.style.opacity = "1";
			buttonRight.style.opacity = "1";
		},
	},
});
