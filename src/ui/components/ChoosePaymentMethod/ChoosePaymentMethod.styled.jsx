import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  /* background-color: bisque; */
`;

export const PaymentMethodSelector = styled.nav`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

export const PaymentMethodButton = styled.button`
  background-color: ${({ active, theme }) => (active ? theme.color.primary : theme.color.hover)};
  color: ${({ active }) => (active ? '#fff' : '#000')};
  border: none;
  padding: 10px 20px;
  margin: 0 10px;
  cursor: pointer;
  font-size: 16px;
  border-radius: 5px;
`;

export const Content = styled.div`
  padding: 20px;
  border-top: none;
  width: 100%;
  height: 37.0rem;
  background-color: ${({ theme }) => (theme.color.hover)};
`;


export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -8px;
`;

export const Column = styled.div`
  flex: 50%;
  padding: 0 8px;
`;