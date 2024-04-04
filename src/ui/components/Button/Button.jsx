
import {ButtonStyles} from './Button.styled';

const Button = ({ width, height, children }) => {
  return (
    <ButtonStyles width={width} height={height}>
      {children}
    </ButtonStyles>
  );
};

export default Button;
