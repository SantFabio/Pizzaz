import drinks from "../../../data/service/databaseService";
import DrinksCards from "../DrinksCard/DrinksCard";
import Button from "../Button/Button"
import {
    PizzaModalStyled,
    PizzaContainer,
    ImgStyled,
    OrderStyled,
    PizzaInformation,
    UlStyled,
    H1Style,
    DescStyled
} from "./PizzaModal.styled";

const PizzaModal = ({ pizzaInFocus, setIsOpen }) => {
    const handleCloseModal = (event) => {
        if(event.target.id === 'modal'){
            setIsOpen(false);
        }
    }
    return (
        <>
            <PizzaModalStyled id="modal" onClick={handleCloseModal} >
                <PizzaContainer>
                    <ImgStyled src={pizzaInFocus.image} alt={pizzaInFocus.nome} />
                    <OrderStyled>
                        <H1Style>{pizzaInFocus.nome}</H1Style>
                        <PizzaInformation>
                            <DescStyled>{pizzaInFocus.descricao}</DescStyled>
                            <UlStyled>
                                {drinks.map((drink, index) => (<DrinksCards key={index} drink={drink}></DrinksCards>))}
                            </UlStyled>
                        </PizzaInformation>
                        <Button>Pedir</Button>
                    </OrderStyled>

                </PizzaContainer>
            </PizzaModalStyled>
        </>
    )
}
export default PizzaModal;