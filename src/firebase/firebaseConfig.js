import { initializeApp } from 'firebase/app';

import { getAuth } from 'firebase/auth';

import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDiJULYUkAtZHvEqMRIUmK6jdMJ3pEnuFs",
  authDomain: "meu-limite-app.firebaseapp.com",
  projectId: "meu-limite-app",
  storageBucket: "meu-limite-app.firebasestorage.app",
  messagingSenderId: "391126949310",
  appId: "1:391126949310:web:40f8cbbff843a266dbedef"
};

const app =
  initializeApp(firebaseConfig);

export const auth =
  getAuth(app);

export const db =
  getFirestore(app);