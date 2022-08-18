// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA83BjAlnUYHpT1pf2E3IQiF8OZtrAaelw",
  authDomain: "linkedin-clone-689f8.firebaseapp.com",
  projectId: "linkedin-clone-689f8",
  storageBucket: "linkedin-clone-689f8.appspot.com",
  messagingSenderId: "117428555067",
  appId: "1:117428555067:web:c82dce67a8bd8358babb1e",
  measurementId: "G-Q232WPG0PG"
};

// Initialize Firebase
 firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth()



