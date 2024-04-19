
import { ButtonStyles } from './Button.styled';

const Button = ({ width, height, children, onClick }) => {
  //Esse componente recebe props dessa forma: onClick={handleIndex} width={"100%"} height={"4.5rem"}
  return (
    <ButtonStyles onClick={onClick} width={width} height={height}>
      {children}
    </ButtonStyles>
  );
};

export default Button;
