// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAXTSMQLeSJEZ0a_5ymcekGFyN4RJYNIg0",
  authDomain: "social-media-app-ec0be.firebaseapp.com",
  projectId: "social-media-app-ec0be",
  storageBucket: "social-media-app-ec0be.appspot.com",
  messagingSenderId: "631016810234",
  appId: "1:631016810234:web:0bd886a034799ba38b4b43",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
