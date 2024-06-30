import Logo from "../Logo/Logo"
import instagram from "../../../assets/img/icon-instagram.svg"
import facebook from "../../../assets/img/icon-facebook.svg"
import linkedin from "../../../assets/img/icon-linkedin.svg"

import { FooterStyled, Informations, Contact, LogoStyled, SocialMedias, ContentStyled, FooterLogo, News } from "./Footer.styled";
import NewsLetter from "./components/NewsLetter";


const Footer = () => {
    return (
        <>
            <FooterStyled>
                <ContentStyled>
                    <News>
                        <NewsLetter />
                    </News>
                    <Contact>
                        <h2>Contato</h2>
                        <address>
                            <p>Endereço: Rua ******, 123</p>
                            <p>Cidade: Cidade</p>
                            <p>CEP: 89111-***</p>
                            <p>Telefone: (91) 98042-****</p>
                            <p>E-mail: pizzaz@empresa.com</p>
                        </address>
                    </Contact>
                    <Informations>
                        <h2>Informações</h2>
                        <p>Sobre nós</p>
                    </Informations>
                    <LogoStyled>
                        <FooterLogo>
                            <Logo />
                        </FooterLogo>
                    </LogoStyled>
                    <SocialMedias>
                        <div>
                            <a href="https://" target="_blank" >
                                <img src={instagram} alt="" />
                            </a>
                            <a href="https://" target="_blank" rel="noopener noreferrer">
                                <img src={facebook} alt="" />
                            </a>
                            <a href="https://" target="_blank" rel="noopener noreferrer">
                                <img src={linkedin} alt="" />
                            </a>
                        </div>
                        <hr />
                        <p>© Luiz Fábio {`${new Date().getFullYear()}`}. Todos os direitos reservados.</p>
                    </SocialMedias>
                </ContentStyled>
            </FooterStyled>
        </>
    )
}
export default Footer;