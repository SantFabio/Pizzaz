import {
  SideNav,
  SpanStyled,
} from "./OrderSidebar.styled";

import EmptyBag from "../EmptyBag/EmptyBag";
import FullBag from "../FullBag/FullBag";
import DivContainer from "../DivContainer/DivContainer";

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
        </SideNav>
      </DivContainer>
    </>
  );
};

export default Sidebar;
