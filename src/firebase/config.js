// Import the functions you need from the SDKs you need
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVeTSlOJEjopyQnF0JeWkWXU2jFAtjULY",
  authDomain: "fir-talento-tech-d8663.firebaseapp.com",
  projectId: "fir-talento-tech-d8663",
  storageBucket: "fir-talento-tech-d8663.firebasestorage.app",
  messagingSenderId: "198572357229",
  appId: "1:198572357229:web:997f738c350a54cadab164"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)