import './style.css';

document.addEventListener('DOMContentLoaded', (event) => {
	// gsap code here!

	gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

	const textElements = gsap.utils.toArray('.text');

	textElements.forEach((text) => {
		gsap.to(text, {
			backgroundSize: '100%',
			ease: 'none',
			scrollTrigger: {
				trigger: text,
				start: 'center 80%',
				end: 'center 20%',
				scrub: true,
			},
		});
	});
});
