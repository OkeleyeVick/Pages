const parentContainer = document.querySelector(".position-selected");
// const entre_cont = document.querySelector(".entrepreneur-container");
// const dev_des = document.querySelector(".dev-and-designers");
// const students = document.querySelector(".students");
const positions = document.querySelectorAll(".position-selected [position]");
const selectRadios = document.querySelectorAll(".inner-section .form-check [type='radio']");

selectRadios.forEach((selectRadio) => {
	selectRadio.addEventListener("change", function () {
		const idOfRadio = this.id;
		positions.forEach((pos) => {
			if (idOfRadio == pos.getAttribute("position")) {
				pos.style.display = "block";
			} else {
				pos.style.display = "none";
			}
		});
	});
});
