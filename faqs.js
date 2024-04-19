import './style.css';

/**
 * Selects all elements with the class 'faq' and toggles the 'active' class on click.
 *
 * This function iterates over each FAQ element, adding an event listener that listens for
 * 'click' events. When a FAQ element is clicked, the 'active' class is toggled on that element.
 * This allows for visual indication of the active FAQ or to apply specific styles to the active FAQ element.
 */
const faqs = document.querySelectorAll('.faq');

faqs.forEach((faq) => {
	faq.addEventListener('click', () => {
		faq.classList.toggle('active');
	});
});
