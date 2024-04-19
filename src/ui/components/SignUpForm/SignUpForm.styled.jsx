import styled from "styled-components";

export const FormOut = styled.form`
`;

export const FormContainer1 = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  transition: opacity 1s ease;
  z-index: ${({ index }) => (index ? "2" : "1")};
  opacity: ${({ index }) => (index ? "1" : "0")};
  padding: 0 3.0rem 0 3.0rem;
  `;

export const FormContainer2 = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.0rem;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  transition: opacity 1s ease;
  z-index: ${({ index }) => (index ? "1" : "2")};
  opacity: ${({ index }) => (index ? "0" : "1")};
  padding: 0 3.0rem 0 3.0rem;
`;

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 65%;
`;

export const Title = styled.h1`
  text-align: center;
  color: ${({ theme }) => theme.color.black};
  font-size: ${({ theme }) => theme.font.xx};
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

export const Span = styled.span`
  font-size: ${({ theme }) => theme.font.sm};
  color: ${({ theme }) => theme.color.primary};
  font-weight: 500;
  margin-left: 1rem;
`;
export const ImgBack = styled.img`
  width: 3.0rem;
  position: absolute;
  top: -3.5rem;
`;
export const Pquestion = styled.p`
  margin-left: 3.0rem;
`;

