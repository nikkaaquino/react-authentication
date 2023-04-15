// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDm5g7MGuNxLqGDw1gC2pVO6GdeUpBopYw",
    authDomain: "authentication-5dd01.firebaseapp.com",
    projectId: "authentication-5dd01",
    storageBucket: "authentication-5dd01.appspot.com",
    messagingSenderId: "673851008009",
    appId: "1:673851008009:web:e83df94a069de7702dc4d8",
    measurementId: "G-BSR8ZYXXPG"
  };
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);