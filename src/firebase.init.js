// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCGQXq7-YQikmw2KONZgXSjDxqA_hLG7hY",
    authDomain: "genius-car-services-f9aec.firebaseapp.com",
    projectId: "genius-car-services-f9aec",
    storageBucket: "genius-car-services-f9aec.appspot.com",
    messagingSenderId: "72101937406",
    appId: "1:72101937406:web:c5dee763ac075c7f4be5af"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;