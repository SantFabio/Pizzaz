import { InputMainStyled } from "./InputMain.styled"
const InputMain = (props) =>{
     return (
        <>
            <InputMainStyled>
                {props.children}
            </InputMainStyled>
        </>
     )
}
export default InputMain;