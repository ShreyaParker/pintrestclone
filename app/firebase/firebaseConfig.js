// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDGYi_DZZTMHFIec38MHe4B7OU9PvJgohw",
    authDomain: "pintrestclone-16502.firebaseapp.com",
    projectId: "pintrestclone",
    storageBucket: "pintrestclone.appspot.com",
    messagingSenderId: "890334160854",
    appId: "1:890334160854:web:ed4e6d796d21d5a1eb2677",
    measurementId: "G-G64DTJ37FQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;