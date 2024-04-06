import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  background-color: #ffffff;
  padding: 30px;
  width: 450px;
  border-radius: 20px;
`;

export const Label = styled.label`
  font-size: ${({ theme }) => theme.font.md};
  font-weight: 500;
`;

export const InputForm = styled.div`
  border: 1.5px solid #ecedec;
  border-radius: 10px;
  height: 50px;
  display: flex;
  align-items: center;
  padding-left: 10px;
  transition: 0.2s ease-in-out;

  &:focus-within {
    border: 1.5px solid ${({ theme }) => theme.color.primary};
  }
`;

export const Input = styled.input`
  margin-left: 10px;
  border-radius: 10px;
  border: none;
  width: 100%;
  height: 100%;

  &:focus {
    outline: none;
  }
`;

export const ButtonSubmit = styled.button`
  align-self: flex-end;
  margin: 20px 0 10px 0;
  background-color: #151717;
  border: none;
  color: white;
  font-size: 15px;
  font-weight: 500;
  border-radius: 10px;
  height: 50px;
  width: 100%;
  cursor: pointer;
`;

export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  justify-content: space-between;
`;

export const Span = styled.span`
  font-size: 14px;
  margin-left: 5px;
  color: ${({ theme }) => theme.color.primary};
  font-weight: 500;
  cursor: pointer;
`;

