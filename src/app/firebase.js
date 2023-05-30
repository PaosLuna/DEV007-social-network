import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

//web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJIVQJUZhd6qepXTzTYDouzHUYqp32qXY",
  authDomain: "mountainme-a55a7.firebaseapp.com",
  projectId: "mountainme-a55a7",
  storageBucket: "mountainme-a55a7.appspot.com",
  messagingSenderId: "854126143691",
  appId: "1:854126143691:web:cccb26de4c85d8151b934e",
  measurementId: "G-QEFDFP4RZ8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// se define el proverdor de autenticacion de cta
export const provider = new GoogleAuthProvider();
//obtiene los servicios de autenticacion
const auth = getAuth();




///https://firebase.google.com/docs/auth/web/google-signin?hl=es
// se hizo el paso 1 y paso 5
