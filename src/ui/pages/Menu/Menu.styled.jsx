import styled from "styled-components";

export const MenuStyled = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
`;

export const UlStyled = styled.ul`
    display: grid;
    justify-items: center;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
    max-width: 104.0rem; 
    width: 100%; 
    list-style-type: none; 
    margin: 2.0rem 0 7.0rem 0;
`
export const HrStyled = styled.hr`
    border-color: ${({ theme }) => theme.color.normal};
`
