import styled from "styled-components";

export const HomeStyled = styled.main`
    background-color: ${({ theme }) => theme.color.primary};
    /* background-color: aqua; */
    max-height: auto;
    height: 100vh;
    overflow: hidden;
    display: flex;
    & img {
        height: 100.0rem;
        /* transform: translateX(); */
    }
`;
export const DivStyled = styled.div`
    margin: 0 0 0 5.0rem;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    /* background-color: aqua; */
    justify-content: space-around;
    `;
export const FirstTextStyled = styled.p`
    font-weight: 400;
    font-size: 2.5rem;
    margin-bottom: -4.5rem;
    text-align: end;
    font-style: italic;
    color: ${({ theme }) => theme.color.secondary};
    `;
export const SecondTextStyled = styled.p`
    color: ${({ theme }) => theme.color.warning};
    font-family: ${({ theme }) => theme.font.fontFamily.shrikhand};
    font-size: 15.0rem;
`;



