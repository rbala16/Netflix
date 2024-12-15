// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";


// web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyBwHWPFpwEp1oCPtOiBE8bnZCMAruWd7Ss",
  authDomain: "netflix-3f606.firebaseapp.com",
  projectId: "netflix-3f606",
  storageBucket: "netflix-3f606.firebasestorage.app",
  messagingSenderId: "2723013447",
  appId: "1:2723013447:web:6dedee43f675ed2ca1a262",
  measurementId: "G-H02JF3XEFD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();