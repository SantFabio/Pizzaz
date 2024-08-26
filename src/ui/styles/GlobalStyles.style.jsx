import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: ${({ theme }) => theme.font.fontFamily.inter};
        font-size: ${({ theme }) => theme.font.sm};
        list-style-type: none;
        text-decoration: none;
        user-select: none;
    ::-webkit-scrollbar {
        width: ${({ theme }) => theme.font.md}; /* Largura da barra de rolagem */
        height: ${({ theme }) => theme.font.md};/* Altura da barra de rolagem horizontal*/
    }
    
    ::-webkit-scrollbar-track {
        background: ${({ theme }) => theme.color.secondary}; /* Cor do fundo da barra de rolagem */
    }
    
    ::-webkit-scrollbar-thumb {
        background: ${({ theme }) => theme.color.warning}; /* Cor do polegar (a parte móvel) */
        border-radius: ${({ theme }) => theme.font.xs}; /* Bordas arredondadas do polegar */
        border: 3px solid ${({ theme }) => theme.color.secondary}; /* Espaço ao redor do polegar */
        background-clip: padding-box; 
    }
    
    ::-webkit-scrollbar-thumb:hover {
        background: ${({ theme }) => theme.color.black}; /* Cor do polegar ao passar o mouse */
    }

/* Para navegadores Firefox */
    html {
        scrollbar-width: thin; /* Tamanho da barra de rolagem */
        scrollbar-color: ${({ theme }) => theme.color.black} ${({ theme }) => theme.color.secondary}; /* Cor do polegar e da trilha */
    }

    }
    body{
        padding-top: 7.0rem;
        /* width: 100dvw; */
    }
    :root{
        font-size:  62.5%; //0.1rem = 1px;
    }
    
`;
export default GlobalStyles;
