// Import the functions you need from the SDKs you need
import { getAnalytics } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';
import { getDatabase, push, ref, set } from 'firebase/database';

// Calling firebase configuration to be run for this app
const firebaseConfig = {
	apiKey: 'AIzaSyCkt-oksZL8XUTj4WVcn46llipq5UCuyLc',
	authDomain: 'summercamp-form.firebaseapp.com',
	databaseURL: 'https://summercamp-form-default-rtdb.firebaseio.com',
	projectId: 'summercamp-form',
	storageBucket: 'summercamp-form.appspot.com',
	messagingSenderId: '119407229994',
	appId: '1:119407229994:web:f2c5935e55a07b67919753',
	measurementId: 'G-1LRXKLN93D',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// reference database
const db = getDatabase(app);
let registerFormDB = ref(db, 'summerCamp-form');

document
	.getElementById('registration-form')
	.addEventListener('submit', submitForm);

function submitForm(e) {
	e.preventDefault();

	let firstname = getElementVal('firstname');
	let lastname = getElementVal('lastname');
	let email = getElementVal('useremail');
	let specialAccomodations = getElementVal('allergies');
	let emrgencyFirstname = getElementVal('emergency-firstname');
	let emrgencyLastname = getElementVal('emergency-lastname');
	let emrgencyNumber = getElementVal('emergency-number');
	let emrgencyRelationship = getElementVal('emergency-relation');
	let sportsRadioBtn = document.getElementById('radio-soccer').checked
		? 'Soccer'
		: 'Basketball';
	let ageCheckbox = getElementVal('check-age');

	saveMessages(
		firstname,
		lastname,
		email,
		specialAccomodations,
		emrgencyFirstname,
		emrgencyLastname,
		emrgencyNumber,
		emrgencyRelationship,
		sportsRadioBtn,
		ageCheckbox
	);

	//  Enabling alert message when the submit button is clicked
	const alertButton = document.querySelector('.alert');
	alertButton.style.display = 'block';

	// Timer to add the alert Message after 5 seconds
	setTimeout(() => {
		alertButton.classList.add('active');
	}, 100);

	// Remove the alert Message after 5 seconds
	setTimeout(() => {
		alertButton.style.display = 'none';
	}, 5000);

	// Reset the form
	document.getElementById('registration-form').reset();
}

const saveMessages = (
	firstname,
	lastname,
	email,
	specialAccomodations,
	emrgencyFirstname,
	emrgencyLastname,
	emrgencyNumber,
	emrgencyRelationship,
	sportsRadioBtn,
	ageCheckbox
) => {
	let newContactForm = push(registerFormDB);

	set(newContactForm, {
		firstname: firstname,
		lastname: lastname,
		email: email,
		specialAccomodations: specialAccomodations,
		emrgencyFirstname: emrgencyFirstname,
		emrgencyLastname: emrgencyLastname,
		emrgencyNumber: emrgencyNumber,
		emrgencyRelationship: emrgencyRelationship,
		sportsRadioBtn: sportsRadioBtn,
		ageCheckbox: ageCheckbox,
	});
};

const getElementVal = (id) => {
	return document.getElementById(id).value;
};
