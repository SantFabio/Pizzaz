import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "inter",system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
    body{
        background-color: #92c2f8;
        height: 100vh;
        width: 100vw;
    }
    :root{
        font-size:  62.5%; //0.1rem = 1px;
    }
`;
export default GlobalStyles;