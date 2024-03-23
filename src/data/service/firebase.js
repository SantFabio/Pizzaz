// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAiLnNKJR8EyO3SAL_hty3Ejt63BeltGng",
  authDomain: "pizzaz-pizzaz.firebaseapp.com",
  projectId: "pizzaz-pizzaz",
  storageBucket: "pizzaz-pizzaz.appspot.com",
  messagingSenderId: "470333304222",
  appId: "1:470333304222:web:1923b1906652e77603ba8f",
  measurementId: "G-2SLTNB7KH6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default getFirestore(app);
