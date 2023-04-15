/* eslint-disable no-unused-vars */
import Swiper, { A11y, Navigation, FreeMode } from "swiper";

const buttonLeft = document.querySelector(".reviews__button-left");
const buttonRight = document.querySelector(".reviews__button-right");
const buttonLeft2 = document.querySelector(".reviews__button-left-2");
const buttonRight2 = document.querySelector(".reviews__button-right-2");

const buttonPhotosLeft = document.querySelector(".photos__button-left");
const buttonPhotosRight = document.querySelector(".photos__button-right");
const buttonPhotosLeft2 = document.querySelector(".photos__button-left-2");
const buttonPhotosRight2 = document.querySelector(".photos__button-right-2");

const swiper = new Swiper(".swiper-reviews", {
	modules: [A11y, Navigation, FreeMode],
	a11y: true,
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
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
				buttonLeft2.style.opacity = "0.4";
			}
			if (e.isEnd && e.isBeginning !== true) {
				buttonRight.style.opacity = "0.4";
				buttonRight2.style.opacity = "0.4";
			}
		},
		fromEdge: function () {
			buttonLeft.style.opacity = "1";
			buttonRight.style.opacity = "1";
			buttonLeft2.style.opacity = "1";
			buttonRight2.style.opacity = "1";
		},
	},
});

const swiperPhotos = new Swiper(".swiper-photos", {
	modules: [A11y, Navigation, FreeMode],
	a11y: true,
	navigation: {
		nextEl: ".swiper-button-next-photos",
		prevEl: ".swiper-button-prev-photos",
	},
	speed: 400,
	freeMode: true,
	autoHeight: true,
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
				buttonPhotosLeft.style.opacity = "0.4";
				buttonPhotosLeft2.style.opacity = "0.4";
			}
			if (e.isEnd && e.isBeginning !== true) {
				buttonPhotosRight.style.opacity = "0.4";
				buttonPhotosRight2.style.opacity = "0.4";
			}
		},
		fromEdge: function () {
			buttonPhotosLeft.style.opacity = "1";
			buttonPhotosRight.style.opacity = "1";
			buttonPhotosLeft2.style.opacity = "1";
			buttonPhotosRight2.style.opacity = "1";
		},
	},
});
