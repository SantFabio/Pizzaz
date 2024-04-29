import { useState, useEffect } from "react";
import Footer from "./ui/components/Footer/Footer";
import Header from "./ui/components/Header/Header";
import Home from "./ui/pages/Home/Home";
import Menu from "./ui/pages/Menu/Menu";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import getPizzas from "../src/data/service/pizzasService";
import OrderSidebar from "./ui/components/OrderSidebar/OrderSidebar";
import AuthPage from "./ui/pages/auth/AuthPage";
import Checkout from "./ui/pages/Checkout/Checkout";
import { useSelector } from "react-redux";
// import { checkUserAuthentication } from "./data/service/authService";

function App() {
  const [pizzas, setPizzas] = useState([]);
  const [isOpen, setIsOpen] = useState(false); //isOpen do carrinho
  const { userState } = useSelector((state) => {
    return state;
  });

  useEffect(() => {
    const unsubscribe = getPizzas(setPizzas);
    // Limpar a inscrição quando o componente for desmontado
    return () => unsubscribe();
  }, []);

  // useEffect(() => {
  //   const verificarAutenticacaoDoUsuario = async () => {
  //     try {
  //       const user = await checkUserAuthentication();
  //       // if (user) {
  //       //   console.log("Usuário logado:", user);
  //       // } else {
  //       //   console.log("Nenhum usuário logado.");
  //       // }
  //     } catch (error) {
  //       console.error("Erro ao verificar autenticação do usuário:", error);
  //     }
  //   };

  //   // Chame a função para verificar a autenticação do usuário
  //   verificarAutenticacaoDoUsuario();

  //   // Lembre-se de retornar uma função de limpeza se necessário
  //   return () => {
  //     // Código de limpeza, se necessário
  //   };
  // }, []);

  return (
    <>
      <Router>
        <Header isOpen={isOpen} setIsOpen={setIsOpen} />
        <Routes>
          <Route path="/auth/" exact element={<AuthPage login />} />
          <Route path="/auth/signup/" exact element={<AuthPage signup />} />
          <Route path="/menu/" exact element={<Menu pizzas={pizzas} setIsOpen={setIsOpen} />} />
          <Route path="/checkout/" exact element={<Checkout userState={userState} />} />
          <Route path="/*" exact element={<Home />} />
        </Routes>
        <OrderSidebar
          pizzas={pizzas}
          setPizzas={setPizzas}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
        <Footer />
      </Router>
    </>
  );
}

export default App;
