import styled from "styled-components";

export const ImgStyled = styled.img`
    width: 40%;
    height: 100%;
    object-fit: cover;
`;
// -----------------------------------------
// informações da pizza e bebidas

export const OrderStyled = styled.div`
    padding: 3%;
    width: 60%;
    height: 100%;
`;
export const PizzaInformation = styled.div`
    overflow-y: auto;
    height: 75%;
    margin-bottom: 2.0rem;
    & > * {
        margin-bottom: 2.0rem;
    }
`;
export const UlStyled = styled.ul`
    border: 0.1rem solid ${({ theme }) => theme.color.hover};
    border-radius: 5px;
    padding:  3%;
`;
export const H1Style = styled.h1`
    font-size: ${({ theme }) => theme.font.lg};
    text-align: center;
    margin-bottom: 1.5rem;
    `;
export const DescStyled = styled.p`
    font-size: ${({ theme }) => theme.font.sm};
    margin-bottom: 1.5rem;
`;