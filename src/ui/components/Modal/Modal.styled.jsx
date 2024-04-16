import styled from "styled-components";

export const Container = styled.div`
    height: 100%;
    width: 100vw;

    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    background-color: rgba(192, 59, 81, 0.9);

    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    align-items: center;
    justify-content: center;
    `;
export const InnerContainer = styled.div`
    width: 60%;
    height: 80%;
    background-color: ${({ theme }) => (theme.color.secondary)};
    border-radius: 5px;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    transform: translateY(10%); 
    opacity: 0;
    transition: opacity 0.5s ease, transform 0.5s ease; 
    animation: slideUp 0.5s ease forwards; 

    @keyframes slideUp {
        from {
            transform: translateY(10%);
            opacity: 0;
        }
        to {
            transform: translateY(0);
            opacity: 1;
        }
    }
`;