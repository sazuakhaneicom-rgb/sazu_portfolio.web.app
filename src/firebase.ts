// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDBldqwgRzAFnT2Z22Y_gJ_HbADspCPQH8",
  authDomain: "sazu-portfolio.firebaseapp.com",
  databaseURL: "https://sazu-portfolio-default-rtdb.firebaseio.com",
  projectId: "sazu-portfolio",
  storageBucket: "sazu-portfolio.firebasestorage.app",
  messagingSenderId: "741850878136",
  appId: "1:741850878136:web:56e421926c70c590a3244d",
  measurementId: "G-JWKKH9M8LE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Analytics conditionally (only works in supported browser environments)
const analyticsPromise = isSupported().then((supported) => {
  return supported ? getAnalytics(app) : null;
});

export { app, analyticsPromise };
