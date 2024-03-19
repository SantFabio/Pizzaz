import logo from "../../../assets/img/logo.svg";
import login from "../../../assets/img/login.svg";
import bag from "../../../assets/img/bag.svg";
import searchIcon from "../../../assets/img/search-icon.svg";

import HeaderStyled from "./Header.styled";
import { Link } from "react-router-dom";
import InputMain from "../InputMain/InputMain";


const Header = () => {
    return (
        <>
            <HeaderStyled>
                <Link to={"/"}>
                    <img className="logo" src={logo} alt="logo" />
                </Link>

                <div className="enter">

                    <InputMain>
                        <div>
                            <img src={searchIcon} alt="search icon" />
                        </div>
                        <input type="text" />
                    </InputMain>

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
