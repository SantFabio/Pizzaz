//drinksService.js
import { collection, onSnapshot } from "firebase/firestore";
import db from "./firebase";

const DRINKS = "bebidas";
const getDrinks = (setDrinks) => {
  const unsubscribe = onSnapshot(collection(db, DRINKS), (snapshot) =>
    setDrinks(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
  );
  
  return unsubscribe;
};
export default getDrinks;