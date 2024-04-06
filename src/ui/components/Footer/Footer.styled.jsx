import styled from "styled-components";

export const FooterStyled = styled.footer`
    background: ${({ theme }) => theme.color.primary};
    display: flex;
    justify-content: center;
    height: 50.0rem;
    font-size: ${({ theme }) => theme.font.md};
`;
export const ContentStyled = styled.div`
    width: 90%;
    color: ${({ theme }) => theme.color.secondary};
    display: grid;
    grid-template: 1fr 1fr /2fr 1fr 1fr;
    grid-template-areas: "newsLetter contact information"
                        "logo socialmedia socialmedia";      
    * h2{
        font-size: ${({ theme }) => theme.font.xl};
        margin-top: 10.5rem;
        margin-bottom: 2.0rem;
    }
    `;
export const NewsLetter = styled.div`
    grid-area: newsLetter;

`;
export const Contact = styled.div`
    grid-area: contact;
    /* background-color: bisque; */
`;
export const Informations = styled.div`
    grid-area: information;
    /* background-color: blue; */
`;
export const LogoStyled = styled.div`
    grid-area: logo;
`;
export const FooterLogo = styled.div`
    transform: translateX(-50px);
    width: 50.0rem;
`;

export const SocialMedias = styled.div`
    /* background-color: darkgreen; */
     grid-area: socialmedia;
    display: flex; 
    align-items: center;
    
    hr {
        width: 10%;
        margin: 0 5px 0 5px;
    }
`;

