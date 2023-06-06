const hamburger = document.querySelector(".hamburger");
const navList = document.querySelector(".navbar-links");
const navLinks = document.querySelectorAll(".navbar-links li a");

hamburger.addEventListener("click", () => {
	navList.classList.toggle("active");
});

navLinks.forEach((navLink) => {
	navLink.addEventListener("click", () => handleClick(navLink));
});

function handleClick(link) {
	if (
		window.getComputedStyle(hamburger).getPropertyValue("display") === "block"
	) {
		setTimeout(() => {
			navList.classList.toggle("active");
		}, 200);
	}
}
