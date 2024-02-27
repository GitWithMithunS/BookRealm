// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBwPXK8lTEUo7GZOX89UacdlTl_-uQGNsI",
  authDomain: "bookrealm-8123d.firebaseapp.com",
  projectId: "bookrealm-8123d",
  storageBucket: "bookrealm-8123d.appspot.com",
  messagingSenderId: "940443758617",
  appId: "1:940443758617:web:a9ac770e37e10414c8fa88",
  measurementId: "G-2CG683J6CY"
};

// Initialize Firebase
const fire = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default fire;