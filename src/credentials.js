// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDd5xxFUl98PsBlyin0QDjGexQIOOQWk5o",
  authDomain: "smart-locker-92c21.firebaseapp.com",
  projectId: "smart-locker-92c21",
  storageBucket: "smart-locker-92c21.firebasestorage.app",
  messagingSenderId: "290380660903",
  appId: "1:290380660903:web:0bd63f84510cc8ebce1b82",
  // apiKey: "AIzaSyB7HDCxqQZnvT90SfgZIUTm7dYw4Wsowo8",
  // authDomain: "practicando-72e06.firebaseapp.com",
  // projectId: "practicando-72e06",
  // storageBucket: "practicando-72e06.firebasestorage.app",
  // messagingSenderId: "564287319239",
  // appId: "1:564287319239:web:d73d9b84c1c56f7648e2e2",
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
const auth = getAuth(appFirebase); // Configuración del módulo de autenticación
// Configura Firestore
const db = getFirestore(appFirebase);

export { appFirebase, auth, db };
