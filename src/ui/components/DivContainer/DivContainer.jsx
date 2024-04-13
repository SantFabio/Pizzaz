import { Container } from "./DivContainer.styled"

const CLOSE = "close";

const DivContainer = ({ children, isOpen, onClick }) => {
    const handleClick = () => {
        if (onClick) {
            onClick();
        }
    };
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