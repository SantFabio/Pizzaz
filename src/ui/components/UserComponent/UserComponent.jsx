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
} from "./UserComponent.styled";

import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userLogOut } from "../../../data/service/authService";
import { logoutUser } from "../../../data/actions/authenticationActions";
import { useState } from "react";

const UserComponent = ({ userState }) => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(true);
  // componente
  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  }
  const logOut = async () => {
    try {
      await userLogOut();
      dispatch(logoutUser());
    } catch (error) {
      alert(error);
    }
  };

  return (
    <>
      {userState.isLoggedIn === true ? (
        <UserContainer >
          <LoginImg src={person} alt="usuário" onClick={handleIsOpen} />
          <DropDownUser isOpen={isOpen}>
            <ImgUserImg
              src={
                userState.user.providerData[0].photoURL === null
                  ? userDefaultImg
                  : userState.user.providerData[0].photoURL
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
        </UserContainer>
      ) : (
        <Link to={"/auth"}>
          <LoginImg src={login} alt="login-logo" />
        </Link>
      )}
    </>
  );
};

export default UserComponent;
