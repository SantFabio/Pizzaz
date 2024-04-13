import styled from "styled-components";

export const Container = styled.div`
  width: ${({ isOpen }) => (isOpen ? '100%' : '0%')};
  background-color: #000000ab;
  height: 100vh;
  position: fixed;
  top: 0rem;
  padding-top: 7.0rem;
  transition: ease 0.5s;
  right: ${({ isOpen }) => (isOpen ? '0' : '-100%')}; 
  display: flex;
  justify-content: end;
  z-index: 1000;
`;