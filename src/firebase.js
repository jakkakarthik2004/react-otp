import { initializeApp } from 'firebase/app';
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyArvrNC44WT6BkiI76oOyYVyf68WMTLI0o",
    authDomain: "otp-login-b825f.firebaseapp.com",
    projectId: "otp-login-b825f",
    storageBucket: "otp-login-b825f.appspot.com",
    messagingSenderId: "553965541688",
    appId: "1:553965541688:web:ac8b3c1306df72744949cd"
  };


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, RecaptchaVerifier, signInWithPhoneNumber };
