import {
  HeaderStyled,
  LogoImg,
  LoginImg,
  BagImg,
  EnterContainer,
  BagContainer,
  BagItems,
} from "./Header.styled";

import { Link } from "react-router-dom";

// import InputMain from "../InputMain/InputMain";
import logo from "../../../assets/img/logo.svg";
import login from "../../../assets/img/login.svg";
import bag from "../../../assets/img/bag.svg";
import { useSelector } from "react-redux";

// import searchIcon from "../../../assets/img/search-icon.svg";
// import OrderSidebar from "../OrderSidebar/OrderSidebar";
const Header = ({ isOpen, setIsOpen }) => {
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  const orderState = useSelector((state) => {
    return state;
  });
  const totalPrice =
    orderState.length > 0
      ? orderState
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
          <Link to={"/auth"}>
            <LoginImg src={login} alt="login-logo" />
          </Link>
          <BagContainer onClick={toggleSidebar}>
            <BagItems>
              <span>
                R$ {totalPrice}
                ,00
              </span>
              <span>{orderState ? orderState.length : 0} itens</span>
            </BagItems>
            <BagImg src={bag} alt="bag" />
          </BagContainer>
        </EnterContainer>
      </HeaderStyled>
    </>
  );
};
export default Header;
