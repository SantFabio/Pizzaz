import Footer from "./ui/components/Footer/Footer";
import Header from "./ui/components/Header/Header"
import Home from "./ui/pages/Home/Home";
import Menu from "./ui/pages/Menu/Menu"
import PizzaModal from "./ui/pages/PizzaModal/PizzaModal";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {

  return (
    <>
      <Router>
        <Header />
        <Routes>
          {/* mudar depois */}
          <Route path="/menu/0" exact element={<PizzaModal />} />
          <Route path="/menu/" exact element={<Menu />} />
          <Route path="/*" exact element={<Home />} />c
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
