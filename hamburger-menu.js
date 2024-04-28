import './style.css';

// This function will used to target the hamburger menu
// when you click, it expands to show you it contents.
// When you click again, its collapse
const hamburgerMenu = document.querySelector('.hamburger-icon');
const navMenu = document.querySelector('.nav-menu');

hamburgerMenu.addEventListener('click', () => {
	hamburgerMenu.classList.toggle('active');
	navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-links').forEach((n) =>
	n.addEventListener('click', () => {
		hamburgerMenu.classList.remove('active'); // Only remove 'active' from navMenu
		navMenu.classList.remove('active'); // Only remove 'active' from navMenu
	})
);
