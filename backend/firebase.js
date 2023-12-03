// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyASrKvnj4NetLcRdf7jZtFrlBKh6uLhn9g",
  authDomain: "edison-c04e1.firebaseapp.com",
  projectId: "edison-c04e1",
  storageBucket: "edison-c04e1.appspot.com",
  messagingSenderId: "143935016068",
  appId: "1:143935016068:web:f8e0e8c083ceb58884c6d1",
  measurementId: "G-5FGQHYD03S",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
