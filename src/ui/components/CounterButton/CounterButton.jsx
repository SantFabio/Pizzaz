import { useState } from "react";
import {
    ButtonContainer,
    CounterButtons
}
from "./CounterButton.styled"

const CounterButton = () => {
  const [counter, setCounter] = useState(1)
  const incrementDecrement = (e) => {
    let element = e.target.innerHTML;
    if (element.includes("-") && counter > 1) {
      setCounter(counter - 1)
    } else if(element.includes("+")){
      setCounter(counter + 1)
    }
  }
  return (
    <>
      <ButtonContainer>
        <CounterButtons onClick={incrementDecrement}>-</CounterButtons>
        <div>{counter}</div>
        <CounterButtons onClick={incrementDecrement}>+</CounterButtons>
      </ButtonContainer>
    </>
  );
};
export default CounterButton;