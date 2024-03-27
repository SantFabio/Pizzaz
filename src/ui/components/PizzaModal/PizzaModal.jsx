import DrinksCards from "../DrinksCard/DrinksCard";
import Button from "../Button/Button";
import {
  PizzaModalStyled,
  PizzaContainer,
  ImgStyled,
  OrderStyled,
  PizzaInformation,
  UlStyled,
  H1Style,
  DescStyled,
} from "./PizzaModal.styled";
import { useEffect, useState } from "react";
import getDrinks from "../../../data/service/drinksService";

const PizzaModal = ({ pizzaInFocus, setIsOpen }) => {
  const [drinks, setDrinks] = useState([]);
  console.log(drinks);
  useEffect(() =>{
    const unsubscribe = getDrinks(setDrinks);
    return () => unsubscribe();
  }, []);

  const handleCloseModal = (event) => {
    if (event.target.id === "modal") {
      setIsOpen(false);
    }
  };
  return (
    <>
      <PizzaModalStyled id="modal" onClick={handleCloseModal}>
        <PizzaContainer>
          <ImgStyled src={pizzaInFocus.image} alt={pizzaInFocus.nome} />
          <OrderStyled>
            <H1Style>{pizzaInFocus.nome}</H1Style>
            <PizzaInformation>
              <DescStyled>{pizzaInFocus.descricao}</DescStyled>
              <UlStyled>
                {drinks.map((drink) => (
                  <DrinksCards key={drink.id} drink={drink}></DrinksCards>
                ))}
              </UlStyled>
            </PizzaInformation>
            <Button>Pedir</Button>
          </OrderStyled>
        </PizzaContainer>
      </PizzaModalStyled>
    </>
  );
};
export default PizzaModal;
