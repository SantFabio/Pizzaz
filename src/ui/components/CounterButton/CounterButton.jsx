
import { increaseQuantity, decreaseQuantity  } from "../../../data/actions/orderActions"
import {
    ButtonContainer,
    CounterButtons
}
from "./CounterButton.styled"

const CounterButton = ({item, dispatch}) => {
  const incrementDecrement = (e) => {
    let symbol = e.target.innerHTML;
    if (symbol.includes("-") && item.quantidade > 1) {
      dispatch(decreaseQuantity(item.produtoId));
    } else if(symbol.includes("+")){
      dispatch(increaseQuantity(item.produtoId));
    }
  }
  return (
    <>
      <ButtonContainer>
        <CounterButtons onClick={incrementDecrement}>-</CounterButtons>
        <div>{item.quantidade}</div>
        <CounterButtons onClick={incrementDecrement}>+</CounterButtons>
      </ButtonContainer>
    </>
  );
};
export default CounterButton;