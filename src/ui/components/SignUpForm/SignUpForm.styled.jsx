import styled from "styled-components";

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  background-color: #ffffff;
  padding: 30px;
  width: 450px;
  border-radius: 5px;
`;

export const Container = styled.div`
  padding: 16px;
  background-color: aqua;
`;

export const Title = styled.h1`
  text-align: center;
`;

export const InputForm = styled.div`
  border: 1.5px solid ${({ theme }) => theme.color.normal};
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

export const Label = styled.label`
  font-size: ${({ theme }) => theme.font.md};
  font-weight: 500;
`;