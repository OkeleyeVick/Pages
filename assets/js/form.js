const parentContainer = document.querySelector(".position-selected");
const positions = document.querySelectorAll("[position]");
const selectRadios = document.querySelectorAll(".inner-section .form-check [type='radio']");

selectRadios.forEach((selectRadio) => {
	selectRadio.addEventListener("change", function (e) {
		console;
		const idOfRadio = this.id;
		positions.forEach((pos) => {
			if (idOfRadio == pos.getAttribute("position")) {
				if (parentContainer.hasChildNodes()) {
					const child = parentContainer.childNodes[0];
					console.log(child);
					pos.style.display = "block";
					parentContainer.replaceChild(pos, child);
				} else {
					parentContainer.append(pos);
				}
				pos.style.display = "block";
			} else {
				pos.style.display = "none";
			}
		});
	});
});

const dropdownContainer = document.querySelector(".dev-position .dropdown-container");
const dropdownTrigger = document.querySelector(".dev-position .dropdown_trigger");
const input = document.getElementById("role-position");
const screen = document.querySelector(".dropdown_trigger .screen-text");
const roles = document.querySelectorAll(".dev-position .dropdown-container .role-position");

dropdownTrigger.addEventListener("click", function () {
	dropdownContainer.classList.toggle("active");
	roles.forEach((role, index) => {
		role.addEventListener("click", function () {
			if (this === roles[index]) {
				const textValue = role.querySelector("span");
				const roleValue = textValue.innerText;
				input.value = roleValue;
				screen.innerText = input.value;
			}
		});
	});
});

const custom_input_button = document.querySelectorAll(".image-container .image-add-toggler");

custom_input_button.forEach((button) => {
	button.addEventListener("click", function (e) {
		e.stopPropagation();
		const fileInput = this.nextElementSibling;
		fileInput.click();
	});
});
