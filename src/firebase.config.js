// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXDrMk8YplBFIauq8Z8nm8Op_umSa69SQ",
  authDomain: "online-jobportal-app.firebaseapp.com",
  projectId: "online-jobportal-app",
  storageBucket: "online-jobportal-app.appspot.com",
  messagingSenderId: "1049729320556",
  appId: "1:1049729320556:web:8e9397eac4ca2b2af53a49",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
