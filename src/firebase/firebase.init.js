// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAp4Beav3g-ltZiDcuOVC47539ybkFmPzY",
  authDomain: "module49-firebase-auth.firebaseapp.com",
  projectId: "module49-firebase-auth",
  storageBucket: "module49-firebase-auth.firebasestorage.app",
  messagingSenderId: "757506610501",
  appId: "1:757506610501:web:1d36b5afc1ce34fbf21a2c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
