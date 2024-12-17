document.querySelector(".username").addEventListener("keydown", (event) => {
	if (event.key === "Enter") {
		document.querySelector(".password").focus();
	}
});

document.querySelector(".password").addEventListener("keydown", (event) => {
	if (event.key === "Enter") {
		document.querySelector(".loginbtn").click();
	}
});

document.querySelector(".loginbtn").addEventListener("click", () => {
	const username = document.querySelector(".username");
	const password = document.querySelector(".password");
	const errorMessage = document.querySelector(".error-message");

	const validUsername = "a";
	const validPassword = "12";

	if (username.value === validUsername && password.value === validPassword) {
		errorMessage.classList.remove("show");
		window.location.replace("typingtest.html");
	} else {
		errorMessage.textContent = "Invalid Username or Password!";
		errorMessage.classList.add("show");
	}
});
