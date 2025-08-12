// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyC9THGej6zSpjVnbqF3nZbCGRQuoX2hCPo",
  authDomain: "clone-sr-90673.firebaseapp.com",
  projectId: "clone-sr-90673",
  storageBucket: "clone-sr-90673.firebasestorage.app",
  messagingSenderId: "1053552747416",
  appId: "1:1053552747416:web:378071be7b9d43363041ed",
  measurementId: "G-C0EQ0EYTLX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();