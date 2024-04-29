import './style.css';

// This is an image trucker function to help allow swiping images on phone
//We’re adding event listeners to detect swipe gestures (both mouse and touch events) on the .slider-tracker element.
//The mousedown and touchstart events capture the initial position (startX) when the user starts swiping
const sliderTracker = document.querySelector('.slider-tracker');
let startX;
let currentTranslateX = 0;

document.addEventListener('DOMContentLoaded', () => {
	sliderTracker.addEventListener('mousedown', handleSwipeStart);
	sliderTracker.addEventListener('touchstart', handleSwipeStart);

	//The handleSwipeStart function sets the initial position (startX) and temporarily removes the transition effect.
	function handleSwipeStart(e) {
		startX = e.type === 'touchstart' ? e.touches[0].clientX : e.clientX;
		sliderTracker.style.transition = 'none';
	}

	//The mousemove and touchmove events track the user’s movement during the swipe.
	//We calculate the change in X position (deltaX) and update the currentTranslateX accordingly.
	sliderTracker.addEventListener('mousemove', handleSwipeMove);
	sliderTracker.addEventListener('touchmove', handleSwipeMove);

	function handleSwipeMove(e) {
		const currentX = e.type === 'touchmove' ? e.touches[0].clientX : e.clientX;
		const deltaX = currentX - startX;
		currentTranslateX += deltaX;
		sliderTracker.style.transform = `translateX(${currentTranslateX}px)`;
	}

	//The mouseup and touchend events finalize the swipe.
	//We restore the transition effect and adjust the slide position based on the swipe distance (deltaX).

	sliderTracker.addEventListener('mouseup', handleSwipeEnd);
	sliderTracker.addEventListener('touchend', handleSwipeEnd);

	function handleSwipeEnd() {
		sliderTracker.style.transition = 'transform 0.5s ease-in-out';
		// Adjust the slide position based on swipe distance (e.g., move to the next slide)
		// Example: currentTranslateX -= 470; // Move one slide to the left
		sliderTracker.style.transform = `translateX(${currentTranslateX}px)`;
	}
});
