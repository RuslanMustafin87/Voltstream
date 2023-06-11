// const faqItem = document.querySelector(".faq__item");
const root = document.documentElement;
const faqItemList = Array.from(document.querySelectorAll(".faq__item"));

faqItemList.forEach((item, index) => {
	item.onclick = () => {
		if (root.style.getPropertyValue(`--rotate-arrow-${index + 1}`) !== "0deg") {
			root.style.setProperty(`--rotate-arrow-${index + 1}`, "0deg");
		} else {
			root.style.setProperty(`--rotate-arrow-${index + 1}`, "180deg");
		}
	};
});
