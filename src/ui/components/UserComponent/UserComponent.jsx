import userDefaultImg from "../../../assets/img/userDefaultImg.svg";
import login from "../../../assets/img/login.svg";
import person from "../../../assets/img/person.svg";

import {
  UserContainer,
  LoginImg,
  DropDownUser,
  ImgUserImg,
  UserName,
  UserOrders,
  LogOutButton,
  PDropDown,
  StyledDoorIcon,
  StyledReceiptIcon,
  LoginImg2,
} from "./UserComponent.styled";

import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userLogOut } from "../../../data/service/authService";
import { logoutUser } from "../../../data/actions/authenticationActions";
import { useState } from "react";
import DivContainer from "../DivContainer/DivContainer";
import LocationAddressInput from "../LocationAddressInput/LocationAddressInput";

const CLOSE = "close";

const UserComponent = ({ userState }) => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  // componente
  const handleClick = (event) => {
    const closeContainer = event.target.className;
    if (closeContainer.includes(CLOSE)) {
      setIsOpen(!isOpen);
    }
  };
  const logOut = async () => {
    try {
      await userLogOut();
      dispatch(logoutUser());
      setIsOpen(!isOpen);
      navigate("/");
    } catch (error) {
      alert(error);
    }
  };

  return (
    <>
      {userState.isLoggedIn === true ? (
        <UserContainer >
          {userState.isLoggedIn ? <LocationAddressInput userState={userState} /> : {}}
          <LoginImg className={CLOSE} src={person} alt="usuário" onClick={handleClick} />
          <DivContainer
            isOpen={isOpen}
            handleClick={handleClick}
          >
            <DropDownUser isOpen={isOpen}>
              <ImgUserImg
                src={
                  userState.user.photoURL === null
                    ? userDefaultImg
                    : userState.user.photoURL
                }
                alt="imagem do usuário"
              />
              <UserName>Olá, {userState.user.displayName.split(' ')[0]}</UserName>
              <Link to={"/userOrders"}>
                <UserOrders>
                  <StyledReceiptIcon />
                  <PDropDown>Pedidos</PDropDown>
                </UserOrders>
              </Link>
              <LogOutButton onClick={logOut}>
                <StyledDoorIcon />
                <PDropDown>Sair</PDropDown>
              </LogOutButton>
            </DropDownUser>
          </DivContainer>
        </UserContainer>
      ) : (
        <Link to={"/auth"}>
          <LoginImg2 src={login} alt="login-logo" />
        </Link>
      )}
    </>
  );
};

export default UserComponent;
