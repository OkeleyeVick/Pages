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

// user js controls
const options = {
	method: "GET",
	headers: {
		"X-RapidAPI-Key": "6473c3ce7dmsh28c8afd093343dep1d0f1fjsn02e8bc02b53a",
		"X-RapidAPI-Host": "alpha-vantage.p.rapidapi.com",
	},
};

fetch("https://alpha-vantage.p.rapidapi.com/query?to_currency=JPY&function=CURRENCY_EXCHANGE_RATE&from_currency=USD", options)
	.then((response) => response.json())
	.then((response) => console.log(response))
	.catch((err) => console.error(err));
