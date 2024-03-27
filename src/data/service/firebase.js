// Importe as funções necessárias dos SDKs que você precisa
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Sua configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAiLnNKJR8EyO3SAL_hty3Ejt63BeltGng",
  authDomain: "pizzaz-pizzaz.firebaseapp.com",
  projectId: "pizzaz-pizzaz",
  storageBucket: "pizzaz-pizzaz.appspot.com",
  messagingSenderId: "470333304222",
  appId: "1:470333304222:web:1923b1906652e77603ba8f",
  measurementId: "G-2SLTNB7KH6"
};

// Inicialize o Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
