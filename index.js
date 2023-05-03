/* FORM FUNCTIONALITY */
// function submission(event) {
// 	event.preventDefault();
// 	let name = document.querySelector("#user-name").value;
// 	let planChoice = document.querySelector("#user-plan").value;
// 	let message = document.querySelector(".submission");
// 	if (planChoice !== "") {
// 		message.style.display = "block";
// 		message.textContent = `Thank you for your interest in the ${planChoice} plan, ${name}. Unfortunately, Omnifood is a fictional company so there's no free meal to send you.`;
// 	} else {
// 		message.style.display = "block";
// 		message.textContent = `Sorry, you need to choose a plan to proceed!`;
// 	}
// }

let sbtn = document.getElementById('sbtn');
sbtn.addEventListener("click", myfunc1)

let name = document.querySelector("#user-name").value;
let planChoice = document.querySelector("#user-plan").value;

let message = document.querySelector(".submission");

function myfunc1() {
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
