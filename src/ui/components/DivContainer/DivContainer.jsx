import { Container } from "./DivContainer.styled"

const CLOSE = "close";

const DivContainer = ({ children, isOpen, handleClick }) => {

    return (
        <Container
            className={CLOSE}
            onClick={handleClick}
            isOpen={isOpen}>
            {children}
        </Container>
    )
}
export default DivContainer;