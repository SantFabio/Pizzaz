import logo from "../../../assets/header/logo.svg";
import login from "../../../assets/header/login.svg";
import bag from "../../../assets/header/bag.svg";
import searchIcon from "../../../assets/header/search-icon.svg";

import HeaderStyled from "./Header.styled";

const Header = () => {
    return (
        <>
            <HeaderStyled>
                <img className="logo" src={logo} alt="logo" />

                <div className="enter">
                    <div className="inputPlace">
                        <div>
                            <img src={searchIcon} alt="search icon" />
                        </div>
                        <input type="text" />
                    </div>
                    <img className="login" src={login} alt="login-logo" />
                    <div className="bag">
                        <div className="itens">
                            <span>R$ 0,00</span>
                            <span>0 itens</span>
                        </div>
                        <img src={bag} alt="bag" />
                    </div>
                </div>
            </HeaderStyled>
        </>
    );
};
export default Header;
