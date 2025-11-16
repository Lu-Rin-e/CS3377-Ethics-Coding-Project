// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAV-58nHJckd64WSMkkidIsHBjBYk4QO7M",
  authDomain: "cs3377project.firebaseapp.com",
  projectId: "cs3377project",
  storageBucket: "cs3377project.firebasestorage.app",
  messagingSenderId: "456219601750",
  appId: "1:456219601750:web:55a9056b077234869c84f7",
  measurementId: "G-MGC533BTV8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app); 