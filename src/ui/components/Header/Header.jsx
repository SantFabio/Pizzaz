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
// import searchIcon from "../../../assets/img/search-icon.svg";
// import OrderSidebar from "../OrderSidebar/OrderSidebar";

const Header = ({ isOpenSideNavMenu, setIsOpenSideNavMenu }) => {
  const handleOpenSideNavMenu = () => {
    setIsOpenSideNavMenu(!isOpenSideNavMenu);
  };
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

          <LoginImg src={login} alt="login-logo" />
          <BagContainer onClick={handleOpenSideNavMenu}>
            <BagItems>
              <span>R$ 0,00</span>
              <span>0 itens</span>
            </BagItems>
            <BagImg src={bag} alt="bag" />
          </BagContainer>

        </EnterContainer>
      </HeaderStyled>
      {/* <OrderSidebar></OrderSidebar> */}
    </>
  );
};
export default Header;
