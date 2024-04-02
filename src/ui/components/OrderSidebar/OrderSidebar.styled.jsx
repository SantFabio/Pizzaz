import styled from 'styled-components';

export const SideNavDivContainer = styled.div`
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.69);
  position: fixed;
  top: 7rem;
  left: 0;
  display: flex;
  flex-direction: row;
  justify-content: end;
`;

export const SideNav = styled.div`
  width: ${({ isOpen }) => (isOpen ? '55.0rem' : '0')};
  height: 100%;
  /* position: fixed; */
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #ffffff;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
`;

export const SpanStyled = styled.span`
  background-color: aqua;
  font-size: ${({ theme }) => theme.font.xl};
  color: ${({ theme }) => theme.color.primary};
  font-weight: bold;
  width: 4.0rem;
  height: 4.0rem;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

