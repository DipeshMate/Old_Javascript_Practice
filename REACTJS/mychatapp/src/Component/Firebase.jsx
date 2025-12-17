// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgzCSlrPiE-7CgxeCTwJwvZBOT7iQNbTI",
  authDomain: "dmate-mychatapp.firebaseapp.com",
  projectId: "dmate-mychatapp",
  storageBucket: "dmate-mychatapp.appspot.com",
  messagingSenderId: "570789187791",
  appId: "1:570789187791:web:5c9b439d296f2b904967ba"
};

// Initialize Firebase
export const myfirebase = initializeApp(firebaseConfig);