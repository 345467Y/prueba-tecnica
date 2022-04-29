// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'

// TODO: Add SDKs for Fi frrebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCcptCy0-c4AF_LLasL4MgFsfg-3ZC6DZ4",
  authDomain: "prueba-tecnica-ae8a1.firebaseapp.com",
  projectId: "prueba-tecnica-ae8a1",
  storageBucket: "prueba-tecnica-ae8a1.appspot.com",
  messagingSenderId: "324935331233",
  appId: "1:324935331233:web:e7d8c3c6cba22dfcf2afe0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const google = new GoogleAuthProvider()
const baseDato = getFirestore()

export {
  app, 
  google, 
  baseDato
}