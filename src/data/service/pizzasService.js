import { collection, onSnapshot } from "firebase/firestore";
import { db } from "./firebase";

const getPizzas = (setPizzas) => {
  const unsubscribe = onSnapshot(collection(db, "pizzas"), (snapshot) =>
    setPizzas(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
  );

  return unsubscribe;
};
export default getPizzas;
