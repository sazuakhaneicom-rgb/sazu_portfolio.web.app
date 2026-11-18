import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// এই কনফিগ গোপন নয় — Firebase ওয়েব apiKey ব্রাউজারে পাবলিক হওয়াই স্বাভাবিক।
// আসল সুরক্ষা আসে firestore.rules থেকে।
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

export const db = getFirestore(app);
export { app, analyticsPromise };

// লক্ষ্য করুন: `auth` এখানে নেই, আছে `firebase-auth.ts`-এ।
// Auth শুধু অ্যাডমিন প্যানেলে দরকার, তাই আলাদা রাখলে পাবলিক সাইটের
// ভিজিটরদের অতিরিক্ত Auth কোড ডাউনলোড করতে হয় না।
