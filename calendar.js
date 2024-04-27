import './style.css';

// Getting the ids for the the June and July button
// Where button one is for June and button two is for July
let button1 = document.getElementById('calender-btn-1');
let button2 = document.getElementById('calender-btn-2');

// Getting the containers for June and July
const JuneCalendar = document.querySelector('.june-calendar');
const JulyCalendar = document.querySelector('.july-calendar');

// When page loads, this function will run
// Button 1 will be active and button 2 will not be active
// When user clicks on button 2, button 1 becomes inactive
document.addEventListener('DOMContentLoaded', function () {
	// Button 1 will be active and get active color from css
	JuneCalendar.classList.add('active');
	button1.className = 'active';

	// function for button 1 when active
	button1.addEventListener('click', function () {
		JuneCalendar.style.display = 'block';
		JulyCalendar.style.display = 'none';
		JulyCalendar.classList.remove('active');

		// Timer to delay how long it takes to load content
		setTimeout(() => {
			JuneCalendar.classList.add('active');
		}, 100); // delay in milliseconds

		button1.className = 'active';
		button2.className = 'inactive';
	});

	// function for button 1 when active
	button2.addEventListener('click', function () {
		JulyCalendar.style.display = 'block';
		JuneCalendar.style.display = 'none';

		JuneCalendar.classList.remove('active');
		// Timer to delay how long it takes to load content
		setTimeout(() => {
			JulyCalendar.classList.add('active');
		}, 100); // delay in milliseconds

		button1.className = 'inactive';
		button2.className = 'active';
	});
});
