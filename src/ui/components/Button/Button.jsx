import { ButtonStyled } from "./Button.styled";

const Button = (props) => {
    return (
        <>
            <ButtonStyled size={props.size}>
                {props.children}
            </ButtonStyled>
        </>
    )
}
export default Button;