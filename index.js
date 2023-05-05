/* FORM FUNCTIONALITY */
function submission1(event) {
	event.preventDefault();

	let name = document.querySelector("#user-name").value;
	let planChoice = document.querySelector("#user-plan").value;

	let message = document.querySelector(".submission");

	if (planChoice !== "") {
		message.style.display = "block";
		message.textContent = "Thank you for your interest in the ${planChoice} plan, ${name}. Unfortunately, Omnifood is a fictional company so there's no free meal to send you.";
	} else {
		message.style.display = "block";
		message.textContent = "Sorry, you need to choose a plan to proceed!";
	}
}

const subscribeForm = document.querySelector("#form-subscribe-element");
subscribeForm.addEventListener("click", submission1);

/* EMAIL VERIFICATION */
let rg = /[a-zA-Z0-9_\-\.]+[@][a-zA-Z]+[\.][a-zA-Z]{2,3}$/;
let bg = /[a-zA-Z0-9]+[@][a-zA-Z]+[\.][a-zA-Z]{2,3}$/;
let em = document.getElementById('user-email')

if(em.value == ""){
	message.style.display = "block";
	message.textContent = "Sorry, you need to put your email id to proceed!";
}