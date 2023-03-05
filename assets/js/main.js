// developers js controls
const barHeight = document.getElementById("bar-height-template");
const barWrapper = document.querySelector(".overlay-bar-wrapper");
const lets_talk_container = document.querySelector(".lets-talk");
const toggler = document.querySelector(".dropdown-toggler");
const dropdown = document.querySelector(".lets-talk .dropdown-container");

// event actions
toggler.addEventListener("click", handleDropdownToggler);

const windowScreens = {
	fromNull: {
		size: "0px",
		bar: 4,
	},
	mobileM: {
		size: "768px",
		bar: 5,
	},
};

function CloneTemplate(amount) {
	for (let i = 0; i < amount; i++) {
		const barClones = barHeight.content.cloneNode(true);
		barWrapper.appendChild(barClones);
	}
}

for (let screenSize in windowScreens) {
	const size = window.matchMedia(`(min-width: ${windowScreens[screenSize].size})`);
	if (size.matches) {
		const bar = windowScreens[screenSize].bar;
		CloneTemplate(bar);
	}
}

function handleDropdownToggler(e) {
	e.preventDefault();
	dropdown.classList.toggle("active");
}
