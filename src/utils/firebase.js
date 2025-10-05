// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDLowQqahjZJ_8KE5-TRqFAJshTjPfmc3Y",
  authDomain: "netflixgpt-487d8.firebaseapp.com",
  projectId: "netflixgpt-487d8",
  storageBucket: "netflixgpt-487d8.firebasestorage.app",
  messagingSenderId: "162698674677",
  appId: "1:162698674677:web:235ffe2aab6e296ed2a0bc",
  measurementId: "G-25SGDKQR3Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();