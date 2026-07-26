import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

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

const app = initializeApp(firebaseConfig);

const analyticsPromise = isSupported().then((supported) =>
  supported ? getAnalytics(app) : null
);

export const auth = getAuth(app);
export const db = getFirestore(app);
export { app, analyticsPromise };
