import { Link } from "react-router-dom";
import pizza_home from "../../../assets/img/pizza-home.svg";
import Button from "../../components/Button/Button";
import {
  HomeStyled,
  DivStyled,
  FirstTextStyled,
  SecondTextStyled,
  LogoText,
} from "./Home.styled";

const Home = () => {
  return (
    <>
      <HomeStyled>
        <DivStyled>
          <LogoText>
            <SecondTextStyled>Bem vindo ao Pizzaz</SecondTextStyled>
            <FirstTextStyled>Sua fome pede</FirstTextStyled>
          </LogoText>
          <Link to="/menu">
            <Button width="20.0rem" height="5.0rem">Comprar</Button>
          </Link>
        </DivStyled>
        <img src={pizza_home} alt={pizza_home.name} />
      </HomeStyled>
    </>
  );
};
export default Home;
