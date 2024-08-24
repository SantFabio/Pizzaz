import styled from "styled-components";

export const HeaderStyled = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: ${({ location }) =>
    (location === '/checkout' ? "center" : "space-between")
  };

  height: 7.0rem;
  width: 100%;
  background-color: ${({ theme }) => theme.color.primary};
  border-bottom: 1px solid ${({ theme }) => theme.color.third};
  padding: 0 2.5rem 0 2.5rem;
`;

export const LogoImg = styled.img`
  height: 8.5rem;
`;

export const EnterContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
`;

export const BagContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 4.6rem;
  width: 14rem;
  border-radius: 2.3rem;
  margin-left: 1.0rem;
  transition: background-color 0.2s ease;
  &:hover {
    background-color: ${({ theme }) => theme.color.third};
  }
`;

export const BagItems = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 0.5rem;
  font-size: ${({ theme }) => theme.font.sm};
  color: ${({ theme }) => theme.color.secondary};
`;
export const BagImg = styled.img`
height: 3.0rem;
`;
