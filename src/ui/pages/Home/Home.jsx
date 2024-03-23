import { Link } from "react-router-dom";
import pizza_home from "../../../assets/img/pizza-home.svg";
import Button from "../../components/Button/Button";
import { HomeStyled, DivStyled, FirstTextStyled, SecondTextStyled } from "./Home.styled";


const Home = () => {
    return (
        <>
            <HomeStyled>
                <DivStyled>
                    <div>
                        <FirstTextStyled>Sua fome pede</FirstTextStyled>
                        <SecondTextStyled>#Pizzaz</SecondTextStyled>
                    </div>
                    <Link to="/menu">
                        <Button size={"large"}>
                            Comprar
                        </Button>
                    </Link>
                </DivStyled>
                <img src={pizza_home} alt={pizza_home.name} />
            </HomeStyled>
        </>
    )
}
export default Home;