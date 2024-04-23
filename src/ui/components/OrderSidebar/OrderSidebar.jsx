import {
  SideNav,
  SpanStyled,
} from "./OrderSidebar.styled";

import EmptyBag from "../EmptyBag/EmptyBag";
import FullBag from "../Order/Order";
import DivContainer from "../DivContainer/DivContainer";
import Button from "../Button/Button";

import { useSelector } from "react-redux";

const CLOSE = "close";

const Sidebar = ({ pizzas, setPizzas, isOpen, setIsOpen }) => {
  const bagState = useSelector((state) => {
    return state.orderState;
  });

  const handleClick = (event) => {
    const closeContainer = event.target.className;
    if (closeContainer.includes(CLOSE)) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <>
      <DivContainer
        isOpen={isOpen}
        handleClick={handleClick}
      >
        <SideNav isOpen={isOpen}>
          <SpanStyled className={CLOSE} onClick={handleClick}>
            X
          </SpanStyled>
          {bagState.length ? <FullBag pizzas={pizzas} setPizzas={setPizzas} bagState={bagState} /> : <EmptyBag isOpen={isOpen} />}
          <Button width="100%" height="5.0rem">
            Escolher forma de pagamento
          </Button>
        </SideNav>
      </DivContainer>
    </>
  );
};

export default Sidebar;
