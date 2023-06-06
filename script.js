document.querySelector(".hamburger").addEventListener("click", () => {
	document.querySelector(".navbar-links").classList.toggle("active");
});

const navLinks = document.querySelectorAll(".navbar-links li a");

navLinks.forEach((navLink) => {
	navLink.addEventListener("click", () => handleClick(navLink));
});

function handleClick(link) {
	navLinks.forEach((navLink) => {
		navLink.classList.toggle("active", navLink === link);
	});
}
