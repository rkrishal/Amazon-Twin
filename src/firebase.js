// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics"; 
import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyDnGiEmm30e3Ipv6HEI6vwtkflZcQRQYUY",
  authDomain: "twin-5a8b8.firebaseapp.com",
  projectId: "twin-5a8b8",
  storageBucket: "twin-5a8b8.appspot.com",
  messagingSenderId: "96535698000",
  appId: "1:96535698000:web:9eadce4cf75847efa78f55",
  measurementId: "G-QPVP135JCZ"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth }; 

