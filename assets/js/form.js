const positions = document.querySelectorAll("[position]");
const parentContainer = document.querySelector(".position-selected");
const selectRadios = document.querySelectorAll(".inner-section .form-check [type='radio']");

selectRadios.forEach((selectRadio) => {
	selectRadio.addEventListener("change", function () {
		const idOfRadio = this.id;
		positions.forEach((pos) => {
			if (idOfRadio == pos.getAttribute("position")) {
				if (parentContainer.hasChildNodes()) {
					const child = parentContainer.childNodes[0];
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

// custom file input
const custom_input_button = document.querySelectorAll(".image-container .image-add-toggler");

custom_input_button.forEach((button) => {
	button.addEventListener("click", function (e) {
		e.stopPropagation();
		const fileInput = this.nextElementSibling;
		fileInput.click();
	});
});

// adding reviews
const reviewContainer = document.querySelector(".review-result-container");
const formReviewerName = document.getElementById("reviewer-name");
const formReview = document.getElementById("review");
const submitReviewBtn = document.querySelector(".review-container button.submit-review");
const review_template = document.getElementById("review_template");

let reviews = [];
submitReviewBtn.addEventListener("click", function () {
	if (formReviewerName.value && formReview.value) {
		const review = {};
		review["reviewer_name"] = formReviewerName.value;
		review["reviewer_text"] = formReview.value;
		reviews.push(review);

		pasteToScreen();
		formReview.value = "";
		formReviewerName.value = "";
	}
});

function pasteToScreen() {
	reviewContainer.innerHTML = "";
	reviews.forEach((item, index) => {
		const review_clone = review_template.content.cloneNode(true);
		const { reviewer_name, reviewer_text } = item;
		const r_text = review_clone.querySelector(".r_30djs span");
		const r_name = review_clone.querySelector(".r_na03sof .name");
		const delete_btn = review_clone.querySelector("button.delete");
		r_text.textContent = reviewer_text;
		r_name.textContent = reviewer_name;
		delete_btn.id = index;
		reviewContainer.appendChild(review_clone);
	});
	const allReviewsDeleteBtn = document.querySelectorAll(".each-review-container button.delete");

	allReviewsDeleteBtn.forEach((button) => {
		button.addEventListener("click", function () {
			deleteReview(button.id);
		});
	});
}

function deleteReview(id) {
	reviews = reviews.filter((review, index) => index !== parseInt(id));
	pasteToScreen();
}
