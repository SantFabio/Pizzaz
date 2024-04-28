import {
  HeaderStyled,
  LogoImg,
  BagImg,
  EnterContainer,
  BagContainer,
  BagItems,
} from "./Header.styled";

import { Link } from "react-router-dom";
import { checkUserAuthentication } from "../../../data/service/authService";
// import InputMain from "../InputMain/InputMain";
import logo from "../../../assets/img/logo.svg";
import bag from "../../../assets/img/bag.svg";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../../../data/actions/authenticationActions";
import UserComponent from "../UserComponent/UserComponent";

// import searchIcon from "../../../assets/img/search-icon.svg";
// import OrderSidebar from "../OrderSidebar/OrderSidebar";
const Header = ({ isOpen, setIsOpen }) => {
  const dispatch = useDispatch();
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  const { orderState, userState } = useSelector((state) => {
    return state;
  });
  console.log(orderState);
  useEffect(() => {
    const checkUser = async () => {
      try {
        const user = await checkUserAuthentication();
        if (user) {
          // Usuário conectado
          dispatch(loginUser(user));
        } else {
          // Nenhum usuário conectado
          console.log("Nenhum usuário conectado");
        }
      } catch (error) {
        console.error("Erro ao verificar autenticação:", error);
      }
    };

    checkUser();
  }, [dispatch]);

  const totalPrice =
    orderState.items.length > 0
      ? orderState.items
        .map((item) => item.precoUnitario * item.quantidade)
        .reduce((accumulator, currentValue) => accumulator + currentValue)
      : 0;
  return (
    <>
      <HeaderStyled>
        <Link to={"/"}>
          <LogoImg src={logo} alt="logo" />
        </Link>

        {/* <InputMain>
          <div>
            <img src={searchIcon} alt="search icon" />
          </div>
          <input type="text" />
        </InputMain> */}

        <EnterContainer>
          <UserComponent isOpen={isOpen} userState={userState} />
          <BagContainer onClick={toggleSidebar}>
            <BagItems>
              <span>
                R$ {totalPrice}
                ,00
              </span>
              <span>{orderState.items ? orderState.items.length : 0} itens</span>
            </BagItems>
            <BagImg src={bag} alt="bag" />
          </BagContainer>
        </EnterContainer>
      </HeaderStyled>
    </>
  );
};
export default Header;
