// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';

import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyDiJULYUkAtZHvEqMRIUmK6jdMJ3pEnuFs",
  authDomain: "meu-limite-app.firebaseapp.com",
  projectId: "meu-limite-app",
  storageBucket: "meu-limite-app.firebasestorage.app",
  messagingSenderId: "391126949310",
  appId: "1:391126949310:web:40f8cbbff843a266dbedef"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);