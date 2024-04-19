import styled from 'styled-components';

const Label = styled.label`
  font-size: ${({ theme }) => theme.font.md};
 color: ${({ theme }) => theme.color.black};
  font-weight: 500;
`;

const InputForm = styled.div`
  border: 1.5px solid ${({ theme }) => theme.color.normal};
  border-radius: 10px;
  height: 50px;
  display: flex;
  align-items: center;
  padding-left: 10px;
  transition: 0.2s ease-in-out;
  /* gap: 1.0rem; */
  &:focus-within {
    border: 1.5px solid ${({ theme }) => theme.color.primary};
  }
`;

const Input = styled.input`
  margin-left: 10px;
  border-radius: 10px;
  border: none;
  width: 100%;
  height: 100%;

  &:focus {
    outline: none;
  }
`;

const FormInput = ({ label, htmlFor, placeholder, name, value, handleChange, required }) => {


  return (
    <>
      <Label htmlFor={htmlFor}>{label}:</Label>
      <InputForm>
        <Input
          type="text"
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={handleChange}
          required={required}
        />
      </InputForm>
    </>
  );
};

export default FormInput;
