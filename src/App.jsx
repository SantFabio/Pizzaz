
import { useState, useEffect } from "react";
import Footer from "./ui/components/Footer/Footer";
import Header from "./ui/components/Header/Header"
import Home from "./ui/pages/Home/Home";
import Menu from "./ui/pages/Menu/Menu"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import db from "../src/data/service/firebase"
import { collection, onSnapshot } from "firebase/firestore";


function App() {
  const [pizzas, setPizzas] = useState([]);
  useEffect(() => {
      onSnapshot(collection(db, "pizzas"), (snapshot) =>
          setPizzas(snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })))
      );

  }, []);
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/menu/" exact element={<Menu pizzas={pizzas}/>} />
          <Route path="/*" exact element={<Home />} />c
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
