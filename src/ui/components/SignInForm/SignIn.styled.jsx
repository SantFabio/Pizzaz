import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  background-color: #ffffff;
  padding: 30px;
  width: 450px;
  border-radius: 5px;
`;
export const Title = styled.h1`
font-size: ${({ theme }) => theme.font.xx};
text-align: center;
color: ${({ theme }) => theme.color.black};
`;

export const Label = styled.label`
  font-size: ${({ theme }) => theme.font.md};
  font-weight: 500;
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

export const ButtonSubmit = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.2rem;

  margin: 20px 0 10px 0;
  background-color: ${({ theme }) => theme.color.hover};
  border: none;
  color: white;
  font-size: ${({ theme }) => theme.font.md};
  font-weight: 500;
  border-radius: 10px;
  height: 50px;
  width: 100%;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  &:hover{
    border: 1.5px solid ${({ theme }) => theme.color.primary};
  }
  `;

export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  justify-content: space-between;
`;

export const Span = styled.span`
  margin-left: 5px;
  color: ${({ theme }) => theme.color.primary};
  font-weight: 500;
  cursor: pointer;
`;
export const HorizonLine = styled.hr`
  height: 0.1rem;
  width: 100%;
  border-color: ${({ theme }) => theme.color.normal};
`;
export const Orp = styled.p`
  display: flex;
  align-items: center;
  gap: 2.0rem;
`;

