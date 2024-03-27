
import { useState, useEffect } from "react";
import Footer from "./ui/components/Footer/Footer";
import Header from "./ui/components/Header/Header"
import Home from "./ui/pages/Home/Home";
import Menu from "./ui/pages/Menu/Menu"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import getPizzas from "../src/data/service/pizzasService"


function App() {
  const [pizzas, setPizzas] = useState([]);
  const [isOpenSideNavMenu, setIsOpenSideNavMenu] = useState(false);
  useEffect(() => {
    const unsubscribe = getPizzas(setPizzas);
    // Limpar a inscrição quando o componente for desmontado
    return () => unsubscribe();
    
  }, []);
  return (
    <>
      <Router>
        <Header isOpenSideNavMenu={isOpenSideNavMenu} setIsOpenSideNavMenu={setIsOpenSideNavMenu}  />
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
