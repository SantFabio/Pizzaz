import styled from 'styled-components';

export const AuthPageDivContainer = styled.div`
    width: 100%;
    height: 100vh;
    background-color: ${({theme}) => (theme.color.primary)};
    position: absolute;
    top: 0;
    z-index: 1000;
    
    display: flex;
    justify-content: end;
    align-items: center;
    `;
export const DivInnerContainer = styled.div`
    width: 51.0rem;
    height: 90%;
    background-color: antiquewhite;
    border-radius: 0.5rem;
    margin-right: 3.0rem;
    display: flex;
    justify-content: center;
    `;
export const LogoDiv = styled.div`
    width: 50%;
    border-radius: 0.5rem;
    margin-right: 3.0rem;
`;