import styled from "styled-components";

export const ButtonContainer = styled.div`
  width: 11.5rem;
  height: 4.8rem;
  display: flex;
  flex-direction: row;
  border: 0.1rem solid ${({ theme }) => theme.color.hover};
  border-radius: 5px;
  & > div {
    display: flex;
    width: 20%;
    justify-content: center;
    align-items: center;
  }
  & > * {
    font-size: ${({ theme }) => theme.font.md};
    font-weight: bold;
  }
`;
export const CounterButtons = styled.button`
  color: ${({ theme }) => theme.color.primary};
  width: 40%;
  border: none;
  background-color: transparent;
  &:active {
    background: linear-gradient(145deg, #e5e5e5, #ffffff);
  }
`;
