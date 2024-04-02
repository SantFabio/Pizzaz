import DrinksCards from "../DrinksCard/DrinksCard";
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
import { addItem } from "../../../data/actions/orderActions";
import { useDispatch } from "react-redux";

const PizzaModal = ({ pizzaInFocus, setIsOpen }) => {
  const [drinks, setDrinks] = useState([]);
  const dispatch = useDispatch();
 
  
  useEffect(() => {
    const unsubscribe = getDrinks(setDrinks);
    return () => unsubscribe();
  }, []);

  const handleCloseModal = (event) => {
    if (event.target.id === "modal") {
      setIsOpen(false);
    }
  };
  const addItemToBag = () => {
    const selectedDrinksIDs = drinks
    .filter((item) => item.selecionado == true)
    .map(item => item.id);
    const selectedPizzaID = pizzaInFocus.id;
    dispatch(addItem(selectedPizzaID, selectedDrinksIDs));
    setIsOpen(false);
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
            <button onClick={addItemToBag}>Adicionar</button>
            <span>*escolha a quantidade no carrinho</span>
          </OrderStyled>
        </PizzaContainer>
      </PizzaModalStyled>
    </>
  );
};
export default PizzaModal;
