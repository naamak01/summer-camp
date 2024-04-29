// Import the functions you need from the SDKs you need
// import 'dotenv/config'; // Calling firebase configuration to be run for this app
import { getAnalytics } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';
import { getDatabase, push, ref, set } from 'firebase/database';

// import { initializeAppCheck, ReCaptchaV3Provider } from 'firebase/app-check';

const firebaseConfig = {
	apiKey: import.meta.env.VITE_API_KEY,
	authDomain: import.meta.env.VITE_AUTH_DOMAIN,
	databaseURL: import.meta.env.VITE_DATABASE_URL,
	projectId: import.meta.env.VITE_PROJECT_ID,
	storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
	messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
	appId: import.meta.env.VITE_API_ID,
	measurementId: import.meta.env.VITE_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Pass your reCAPTCHA v3 site key (public key) to activate(). Make sure this
// key is the counterpart to the secret key you set in the Firebase console.
// const appCheck = initializeAppCheck(app, {
// 	provider: new ReCaptchaV3Provider(import.meta.env.VITE_RECAPTCHA_KEY),

// 	// Optional argument. If true, the SDK automatically refreshes App Check
// 	// tokens as needed.
// 	isTokenAutoRefreshEnabled: true,
// });

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
	const registerButton = document.querySelector('.alert');
	registerButton.style.display = 'block';

	// Timer to add the alert Message after 5 seconds
	setTimeout(() => {
		registerButton.classList.add('active');
	}, 100);

	// Remove the alert Message after 5 seconds
	setTimeout(() => {
		registerButton.style.display = 'none';
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
