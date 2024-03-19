import Footer from "./ui/components/Footer/Footer";
import Header from "./ui/components/Header/Header"
import Home from "./ui/pages/Home/Home";
import Menu from "./ui/pages/Menu/Menu"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/menu" exact element={<Menu />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
