/* HAMBURGER MENU */
const navButton = document.querySelector(".mobile-nav-btn");
const headerElement = document.querySelector(".header");

navButton.addEventListener("click", function () {
	headerElement.classList.toggle("nav-open");
});

/* PRICING TOGGLE */
const pricing = document.querySelectorAll(".pricing-num");
const toggleButton = document.querySelector("#toggle");

function togglePricing() {
	const prices = toggleButton.checked
		? ["3995", "6995", "9995"]
		: ["395", "645", "999"];
	for (let i = 0; i < pricing.length; i++) {
		pricing[i].textContent = prices[i];
	}
}

toggleButton.addEventListener("click", togglePricing);

/* FORM FUNCTIONALITY */
function submission(event) {
	event.preventDefault();
	let name = document.querySelector("#user-name").value;
	let planChoice = document.querySelector("#user-plan").value;
	let message = document.querySelector(".submission");
	if (planChoice !== "") {
		message.style.display = "block";
		message.textContent = `Thank you for your interest in the ${planChoice} plan, ${name}. Unfortunately, Omnifood is a fictional company so there's no free meal to send you.`;
	} else {
		message.style.display = "block";
		message.textContent = `Sorry, you need to choose a plan to proceed!`;
	}
}

const subscribeForm = document.querySelector("#form-subscribe-element");
subscribeForm.addEventListener("submit", submission);
