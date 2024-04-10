import styled from "styled-components";

export const AuthPageDivContainer = styled.div`
  width: 100%;
  height: 99vh;
  background-color: ${({ theme }) => theme.color.primary};
  position: absolute;
  top: 0;
  z-index: 1000;
  display: grid;
  grid-template: 70% 30%;
  grid-template-areas: "logodiv divInnerContainer";
`;
export const DivInnerContainer = styled.div`
  align-self: center;

  width: 450px;
  height: 90%;
  margin-right: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${({ theme }) => theme.color.secondary};
  border-radius: 5px;
  grid-area: divInnerContainer;
`;
export const LogoDiv = styled.div`
  grid-area: logodiv;
`;
