import styled from "styled-components";
import Door from "../SvgComponents/Door";
import Receipt from "../SvgComponents/Receipt";


export const UserContainer = styled.div`
  position: relative;
  height: 3rem;
  `;
export const LoginImg = styled.img`
  position: relative;
  height: 3.0rem;
  `;
export const LoginImg2 = styled.img`
  position: relative;
  height: 2.8rem;
  top: 2px;
  `;

export const DropDownUser = styled.div`
  position: fixed;
  top: 7.0rem;
  /* margin-top: 7.0rem; */
  right: 17.5rem;
  border-radius: 0 0 10px 10px;
  padding: ${({ isOpen }) => (isOpen ? "3.0rem 0" : "0")};
  max-height: ${({ isOpen }) => (isOpen ? "80vh" : "0")}; /* Defina um valor máximo grande quando aberto e 0 quando fechado */
  overflow: hidden;
  transition: max-height 0.3s ease, padding 0.3s ease; 
  width: 32.0rem;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 4px 8px ${({ theme }) => (theme.color.normal)};

  & > *:not(img) {
    width: 100%;
    height: 6.0rem;
    padding: 1.0rem 4.0rem;
  }
  & div, a {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    &:hover {
      background-color: ${({ theme }) => theme.color.hover};
      & p,
      svg {
        color: ${({ theme }) => theme.color.primary};
      }
    }
  }
`;


export const StyledDoorIcon = styled(Door)`
  height: 3.0rem;
  width: 3.0rem;
  margin-right: 2.0rem;
  color: ${({ theme }) => (theme.color.black)};
  `;
export const StyledReceiptIcon = styled(Receipt)`
  height: 3.0rem;
  width: 3.0rem;
  margin-right: 2.0rem;
  color: ${({ theme }) => (theme.color.black)};
  `;
export const ImgUserImg = styled.img`
  height: 10.5rem;
  width: 10.5rem;
  border-radius: 50%;
  margin-bottom: 1.0rem;
  object-fit: cover;
`;
export const UserName = styled.h1`
  font-size: ${({ theme }) => (theme.font.xl)};
  white-space: nowrap;
  `;

export const UserOrders = styled.div`
`;

export const LogOutButton = styled.div`
`;

export const PDropDown = styled.p`
font-size: ${({ theme }) => (theme.font.md)};
color: ${({ theme }) => (theme.color.black)};
font-weight: 500;
`;
