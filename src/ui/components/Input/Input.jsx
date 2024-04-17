import { InputStyled } from "./Input.styled"

const InputMain = ({ children }) => {
    return (
        <>
            {/* Esse Input espera receber como children, uma div com img dentro e um input */}
            <InputStyled >
                {children}
            </InputStyled>
        </>
    )
}
export default InputMain;