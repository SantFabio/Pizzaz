import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: ${({ theme }) => theme.font.fontFamily.inter};
        list-style-type: none;
        text-decoration: none;
        user-select: none;
    }
    body{
        padding-top: 7.0rem;
    }
    :root{
        font-size:  62.5%; //0.1rem = 1px;
    }
`;
export default GlobalStyles;
