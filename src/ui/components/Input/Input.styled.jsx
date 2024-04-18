import styled from "styled-components";

export const InputStyled = styled.div`
    all: unset;
    background-color: ${({ theme }) => theme.color.third};
    height: 4.5rem;
    width: 100%;
    border-radius: 1.0rem;
    display: flex;
    flex-direction: row;
     div{
            height: 100%;
            width: 15%;
            display: flex;
            justify-content: center;
            align-items: center;
            /* background-color: aliceblue; */
        img{
            height: 3.0rem;
        }
    }
    input {
        all: unset;
        height: 100%;
        width: 100%;
        letter-spacing: 0.1rem;
        font-size: ${({ theme }) => theme.font.md};
        color: ${({ theme }) => theme.color.secondary};
        padding-left: 1.5rem;
    }
    input::placeholder {
        color: ${({ theme }) => theme.color.secondary};
    }
`;
