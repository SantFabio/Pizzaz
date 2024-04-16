
import {
    Container,
    InnerContainer
} from "./Modal.styled"

const Modal = ({ handleModal, isOpen, children }) => {

    return (
        <>
            <Container id="modal" onClick={handleModal} isOpen={isOpen} >
                <InnerContainer>
                    {children}
                </InnerContainer>
            </Container>
        </>
    )
}
export default Modal;