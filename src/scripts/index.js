// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD2J9B9v87RBjDV5lN6vD1WBALeznimDPM",
  authDomain: "island-essence-c9f00.firebaseapp.com",
  projectId: "island-essence-c9f00",
  storageBucket: "island-essence-c9f00.firebasestorage.app",
  messagingSenderId: "12266323048",
  appId: "1:12266323048:web:934a00b9b476f6bcec8fdd",
  measurementId: "G-LD7CY68K3P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);