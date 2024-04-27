// Import the functions you need from the SDKs you need
import { getAnalytics } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';
import { getDatabase, push, ref, set } from 'firebase/database';

// Calling firebase configuration to be run for this app
require('dotenv').config();

const firebaseConfig = {
	apiKey: process.env.FIREBASE_API_KEY,
	authDomain: process.env.FIREBASE_AUTH_DOMAIN,
	databaseURL: process.env.FIREBASE_DATABASE_URL,
	projectId: process.env.FIREBASE_PROJECT_ID,
	storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
	appId: process.env.FIREBASE_APP_ID,
	measurementId: process.env.FIREBASE_MEASUREMENT_ID,
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
	let sportsRadioBtn = document.getElementById('check-soccer').checked
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
