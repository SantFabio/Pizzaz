
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAiLnNKJR8EyO3SAL_hty3Ejt63BeltGng",
  authDomain: "pizzaz-pizzaz.firebaseapp.com",
  projectId: "pizzaz-pizzaz",
  storageBucket: "pizzaz-pizzaz.appspot.com",
  messagingSenderId: "470333304222",
  appId: "1:470333304222:web:1923b1906652e77603ba8f",
  measurementId: "G-2SLTNB7KH6"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);


