document.querySelector(".hamburger").addEventListener("click", () => {
	document.querySelector(".navbar-links").classList.toggle("active");
});

var navbarLinks = document.querySelectorAll(".navbar-links li a");
navbarLinks.forEach((navLink) => {
	navLink.addEventListener("click", () => handleClick(navLink));
});

function handleClick(link) {
	navbarLinks.forEach((navLink) => {
		navLink.classList.remove("active");
	});
	link.classList.add("active");
}
