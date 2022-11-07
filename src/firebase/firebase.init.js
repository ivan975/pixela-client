// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    // apiKey: process.env.REACT_APP_apiKey,
    // authDomain: process.env.REACT_APP_authDomain,
    // projectId: process.env.REACT_APP_projectId,
    // storageBucket: process.env.REACT_APP_storageBucket,
    // messagingSenderId: process.env.REACT_APP_messagingSenderId,
    // appId: process.env.REACT_APP_appId
    apiKey: "AIzaSyAw-6c8kD-UrgFd3xSOtzEUcbvIIM4QLUA",
    authDomain: "pixelas-authentication.firebaseapp.com",
    projectId: "pixelas-authentication",
    storageBucket: "pixelas-authentication.appspot.com",
    messagingSenderId: "444177323654",
    appId: "1:444177323654:web:853b1f3b8cf8b757572307"

};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);