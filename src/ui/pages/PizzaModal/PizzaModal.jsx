import drinks from "../../../data/service/databaseService";
import DrinksCards from "../../components/DrinksCard/DrinksCard";
import Button from "../../components/Button/Button"
import { PizzaModalStyled, PizzaContainer, ImgStyled, OrderStyled, PizzaInformation, UlStyled, H1Style, DescStyled } from "./PizzaModal.styled";

const PizzaModal = (props) => {
    return (
        <>
            <PizzaModalStyled>
                <PizzaContainer>
                    <ImgStyled src="https://img.cybercook.com.br/receitas/819/pizza-a-portuguesa-1.jpeg" alt="pizza" />

                    <OrderStyled>
                        <H1Style>Portuguesa</H1Style>
                        <PizzaInformation>
                            <DescStyled>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit rem velit asperiores a quaerat explicabo, aspernatur ad id iure incidunt necessitatibus nesciunt eligendi perferendis quidem ab ipsa aut nulla cupiditate!</DescStyled>
                            <UlStyled>
                                {drinks.map((drink, index) => (<DrinksCards key={index} drink={drink}></DrinksCards>))}
                            </UlStyled>
                        </PizzaInformation>
                        <Button size={"small"}>Pedir</Button>
                    </OrderStyled>

                </PizzaContainer>
            </PizzaModalStyled>
        </>
    )
}
export default PizzaModal;