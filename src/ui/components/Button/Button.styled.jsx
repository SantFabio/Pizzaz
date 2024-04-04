import styled from "styled-components";

export const ButtonStyles = styled.button`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background: ${({ theme }) => theme.color.black};
  color: ${({ theme }) => theme.color.secondary};
  box-shadow: 0px 6px 24px 0px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  cursor: pointer;
  border: none;
  width: ${(props) => props.width || "auto"};
  height: ${(props) => props.height || "auto"};

  &:after {
    content: " ${(props) => props.children} ";
    width: 0%;
    height: 100%;
    background: ${({ theme }) => theme.color.warning};
    color: ${({ theme }) => theme.color.primary};
    font-weight: bold;
    position: absolute;
    transition: all 0.4s ease-in-out;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }

  &:hover::after {
    right: auto;
    left: 0;
    width: 100%;
  }

  /* span {
    text-align: center;
    text-decoration: none;
    width: 100%;
    padding: 18px 25px;
    color: #fff;
    font-size: 1.125em;
    font-weight: 700;
    letter-spacing: 0.3em;
    z-index: 20;
    transition: all 0.3s ease-in-out;
  } */

  /* &:hover span {
    color: #183153;
    animation: scaleUp 0.3s ease-in-out;
  } */

  @keyframes scaleUp {
    0% {
      transform: scale(1);
    }

    50% {
      transform: scale(0.95);
    }

    100% {
      transform: scale(1);
    }
  }
`;
