/* FORM FUNCTIONALITY */
function submission1(event) {
	event.preventDefault();

	let name = document.querySelector("#user-name").value;
	let planChoice = document.querySelector("#user-plan").value;

	console.log(name)

	let message = document.querySelector(".submission");

	let rg = /[a-zA-Z0-9_\-\.]+[@][a-zA-Z]+[\.][a-zA-Z]{2,3}$/;
	let em = document.getElementById("user-email");

	// if (planChoice == "") {
	// 	message.style.display = "block";
	// 	message.textContent = "Sorry, you need to choose a plan to proceed!";
	// }

	if (em.value == "") {
		message.style.display = "block";
		message.textContent = "Sorry, you need to put your email id to proceed!";
	}

	else if (!(rg.test(em.value))) {
		message.style.display = "block";
		message.textContent = "Please, put your valid email id to proceed!";
	}

	else {
		message.style.display = "block";
		message.textContent = "Thank you for your interest in the ${planChoice} plan, ${name}. Unfortunately, Omnifood is a fictional company so there's no free meal to send you.";
	}
}

const subscribeForm = document.querySelector("#form-subscribe-element");
subscribeForm.addEventListener("click", submission1);
