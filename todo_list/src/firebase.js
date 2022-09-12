// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    // apiKey: "AIzaSyABWN9eEtd-HXb9PmvTATUdZtYRNgJ5xsw",
    apiKey: 'process.env.REACT_APP_FIRST_API',
    authDomain: "todo-app-6852b.firebaseapp.com",
    projectId: "todo-app-6852b",
    storageBucket: "todo-app-6852b.appspot.com",
    messagingSenderId: "900184769235",
    appId: "1:900184769235:web:18adbc49cef4320e07ca26"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
