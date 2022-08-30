// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCX173L3HEcShf4U-RHnAVwa2Y3TZI9qpc",
  authDomain: "my-portfolio-site-d2dc9.firebaseapp.com",
  projectId: "my-portfolio-site-d2dc9",
  storageBucket: "my-portfolio-site-d2dc9.appspot.com",
  messagingSenderId: "695774038074",
  appId: "1:695774038074:web:dc8ca6baf1c5ef766fcd03",
  measurementId: "G-3D1NMX5841"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);