// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCOcEQVOJuWuPXnUm40Didu4lOKcY-f-s",
  authDomain: "next-lontec-form.firebaseapp.com",
  projectId: "next-lontec-form",
  storageBucket: "next-lontec-form.appspot.com",
  messagingSenderId: "839227027881",
  appId: "1:839227027881:web:e24764d4993c3b8ba5d4b8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export {auth}