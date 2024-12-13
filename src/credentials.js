// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // --- Angela
  // apiKey: "AIzaSyDd5xxFUl98PsBlyin0QDjGexQIOOQWk5o",
  // authDomain: "smart-locker-92c21.firebaseapp.com",
  // projectId: "smart-locker-92c21",
  // storageBucket: "smart-locker-92c21.firebasestorage.app",
  // messagingSenderId: "290380660903",
  // appId: "1:290380660903:web:0bd63f84510cc8ebce1b82",
  // ---Jhunior
  apiKey: "AIzaSyB7HDCxqQZnvT90SfgZIUTm7dYw4Wsowo8",
  authDomain: "practicando-72e06.firebaseapp.com",
  databaseURL: "https://practicando-72e06-default-rtdb.firebaseio.com/",
  projectId: "practicando-72e06",
  storageBucket: "practicando-72e06.firebasestorage.app",
  messagingSenderId: "564287319239",
  appId: "1:564287319239:web:d73d9b84c1c56f7648e2e2",
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
const auth = getAuth(appFirebase); // Configuración del módulo de autenticación
const db = getFirestore(appFirebase);
const dbReal = getDatabase(appFirebase);

export { appFirebase, auth, db, dbReal };
