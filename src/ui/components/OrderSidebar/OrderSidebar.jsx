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

  const toggleSidebar = (event) => {
    const closeContainer = event.target;
    console.log(closeContainer);
    // if (closeContainer.includes(CLOSE)) {
    //   setIsOpen(!isOpen);
    // }
  };

  return (
    <>
      <DivContainer
        isOpen={isOpen}
        onClick={toggleSidebar}
      >
        <SideNav isOpen={isOpen}>
          <SpanStyled className={CLOSE} onClick={toggleSidebar}>
            X
          </SpanStyled>
          {bagState.length ? <FullBag pizzas={pizzas} setPizzas={setPizzas} bagState={bagState} /> : <EmptyBag isOpen={isOpen} />}
        </SideNav>
      </DivContainer>
    </>
  );
};

export default Sidebar;
