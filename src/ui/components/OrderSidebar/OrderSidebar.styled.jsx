import styled from 'styled-components';

export const SideNavDivContainer = styled.div`
  width: ${({ isOpen }) => (isOpen ? '100%' : '0%')};
  height: 100%;
  /* background-color: rgba(0, 0, 0, 0.69); */
  position: fixed;
  top: 7rem;
  transition: ease 0.5s;
  right: ${({ isOpen }) => (isOpen ? '0' : '-100%')}; 
  display: flex;
  justify-content: end;
`;

export const SideNav = styled.div`
  width: ${({ isOpen }) => (isOpen ? '55.0rem' : '0')};
  height: 100%;
  z-index: 1;
  top: 0;
  background-color: #2146ed;
  transition: ease 0.5s;
  display: flex;
  justify-content: center;
  position: relative;
  & > *{
    opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
    transition: ease-out 0.5s; 
  }
`;

export const SpanStyled = styled.span`
  font-size: ${({ theme }) => theme.font.xl};
  color: ${({ theme }) => theme.color.primary};
  font-weight: bold;
  width: 4.0rem;
  height: 4.0rem;
  position: absolute;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

