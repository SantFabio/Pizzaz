import styled from "styled-components";

export const ButtonStyled = styled.button`
    position: relative;
    font-size: ${({ theme }) => theme.font.xl};
    background-color: ${({ theme }) => theme.color.warning};
    text-decoration: none;
    border: none;
    border-radius: 0.5em;
    cursor: pointer;
    transition: box-shadow 0.3s, transform 0.3s;

    ${({ size }) => {
      switch (size) {
        case 'small':
          return `
            width: 15.0rem;
            height: 5.0rem;
            font-size: ${({ theme }) => theme.font.md};
          `;
        case 'large':
          return `
            width: 25.0rem;
            height: 7.0rem;
            font-size: ${({ theme }) => theme.font.xl};
          `;
        default:
          return `
            width: 12rem;
            height: 4rem;
            font-size: ${({ theme }) => theme.font.lg};
          `;
      }
    }}

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

