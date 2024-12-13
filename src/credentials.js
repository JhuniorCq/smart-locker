// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7HDCxqQZnvT90SfgZIUTm7dYw4Wsowo8",
  authDomain: "practicando-72e06.firebaseapp.com",
  projectId: "practicando-72e06",
  storageBucket: "practicando-72e06.firebasestorage.app",
  messagingSenderId: "564287319239",
  appId: "1:564287319239:web:d73d9b84c1c56f7648e2e2",
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
const auth = getAuth(appFirebase); // Configuración del módulo de autenticación
// Configura Firestore
const db = getFirestore(appFirebase);

export { appFirebase, auth, db };
