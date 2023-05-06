/* FORM FUNCTIONALITY INCLUDING VALIDATION*/
function submission1(event) {
	event.preventDefault();

	let name = document.querySelector("#user-name").value;
	let planChoice = document.querySelector("#user-plan").value;

	let message = document.querySelector(".submission");

	let rg = /[a-zA-Z0-9_\-\.]+[@][a-zA-Z]+[\.][a-zA-Z]{2,3}$/;
	let em = document.getElementById("user-email");


	if (name == "") {
		message.style.display = "block";
		message.textContent = "Sorry, you need to put your name to proceed!";
	}
	
	else if (em.value == "") {
		message.style.display = "block";
		message.textContent = "Sorry, you need to put your email id to proceed!";
	}

	else if (!(rg.test(em.value))) {
		message.style.display = "block";
		message.textContent = "Please, put your valid email id to proceed!";
	}

	else if (planChoice == "") {
		message.style.display = "block";
		message.textContent = "Sorry, you need to select your plan to proceed!";
	}

	else {
		message.style.display = "block";
		message.textContent = "Thank you for your interest in the "+planChoice+" plan, "+name+". Unfortunately, Omnifood is a fictional company so there's no free meal to send you.";
	}
}

const subscribeForm = document.querySelector("#form-subscribe-element");
subscribeForm.addEventListener("click", submission1);

/* STICKY NAVIGATION */
const onSecondPage = document.querySelector(".section-hero");
const navObserver = new IntersectionObserver(

	function (entries) {
		const ent = entries[0];
		if (ent.isIntersecting === false) {
			document.body.classList.add("sticky");
		} else {
			document.body.classList.remove("sticky");
		}
	})

navObserver.observe(onSecondPage);


/* HOVER FUNCTIONALITY FOR MOBILE */
document.addEventListener("touchstart", function () {}, true);

/* HAMBURGER MENU */
const navButton = document.querySelector(".mobile-nav-btn");
const headerElement = document.querySelector(".header");

navButton.addEventListener("click", function () {
	headerElement.classList.toggle("nav-open");
});
