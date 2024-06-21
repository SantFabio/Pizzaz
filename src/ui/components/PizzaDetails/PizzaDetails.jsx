import DrinksCards from "../DrinksCard/DrinksCard";
import {
  ImgStyled,
  OrderStyled,
  PizzaInformation,
  UlStyled,
  H1Style,
  DescStyled,
} from "./PizzaDetails.styled";
import Button from "../Button/Button";
import { useEffect, useState } from "react";
import getDrinks from "../../../data/service/drinksService";
import { addItem } from "../../../data/actions/orderActions";
import { useDispatch } from "react-redux";
import Modal from "../Modal/Modal";

const PizzaDetails = ({ pizzaInFocus, setIsOpenPizzaModal, setIsOpen }) => {
  const [drinks, setDrinks] = useState([]);
  const dispatch = useDispatch();


  useEffect(() => {
    const unsubscribe = getDrinks(setDrinks);
    return () => unsubscribe();
  }, []);

  const handleCloseModal = (event) => {
    if (event.target.id === "modal") {
      setIsOpenPizzaModal(false);
    }
  };
  const addItemToBag = () => {
    const selectedDrinks = drinks
      .filter((item) => item.selecionado == true)
    const selectedPizza = pizzaInFocus;
    dispatch(addItem(selectedPizza, selectedDrinks));
    setIsOpenPizzaModal(false);
    setIsOpen(true);
  };

  return (
    <>
      <Modal id="modal" isOpen={setIsOpen} handleModal={handleCloseModal}>
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
          <Button width={"100%"} height={"4.5rem"} onClick={addItemToBag}>Adicionar</Button>
          <span>*escolha a quantidade no carrinho</span>
        </OrderStyled>
      </Modal>
    </>
  );
};
export default PizzaDetails;
