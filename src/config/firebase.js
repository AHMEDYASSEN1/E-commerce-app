import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBUyeifsEnoAGmQckeW5IqENlDsJEC8wYg",
  authDomain: "e-commerce-app-15130.firebaseapp.com",
  projectId: "e-commerce-app-15130",
  storageBucket: "e-commerce-app-15130.appspot.com",
  messagingSenderId: "581616561058",
  appId: "1:581616561058:web:06b67914f5ff4ea26160fb",
  measurementId: "G-M9X9S3EZXF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
