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

export const ButtonStyled = styled.button`
  position: relative;
  font-size: ${({ theme }) => theme.font.xl};
  padding: 0.7em 1.4em;
  width: 25.0rem;
  height: 10.0rem;
  background-color: ${({ theme }) => theme.color.warning};
  text-decoration: none;
  border: none;
  border-radius: 0.5em;
  box-shadow: 0.5em 0.5em 0.5em rgba(0, 0, 0, 0.3);

  &::before {
    position: absolute;
    content: '';
    height: 0;
    width: 0;
    top: 0;
    left: 0;
    background: linear-gradient(135deg, #bd0303 0%, rgba(33,33,33,1) 50%, rgba(150,4,31,1) 50%, rgba(191,4,38,1) 60%);
    border-radius: 0 0 0.5em 0;
    box-shadow: 0.2em 0.2em 0.2em rgba(0, 0, 0, 0.3);
    transition: 0.3s;
}

&:hover::before {
    width: 1.6em;
    height: 1.6em;
  }

  &:active {
    box-shadow: 0.2em 0.2em 0.3em rgba(0, 0, 0, 0.3);
    transform: translate(0.1em, 0.1em);
  }
`;

