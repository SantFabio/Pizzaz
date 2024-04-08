import {
  SideNavDivContainer,
  SideNav,
  SpanStyled,
} from "./OrderSidebar.styled";

import EmptyBag from "../EmptyBag/EmptyBag";
import { useSelector } from "react-redux";
import FullBag from "../FullBag/FullBag";

const CLOSE = "close";
const Sidebar = ({ pizzas, setPizzas, isOpen, setIsOpen }) => {
  const bagState = useSelector((state) => state);

  const toggleSidebar = (event) => {
    const closeContainer = event.target.className;
    if (closeContainer.includes(CLOSE)) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <SideNavDivContainer
      isOpen={isOpen}
      className={CLOSE}
      onClick={toggleSidebar}
    >
      <SideNav isOpen={isOpen}>
        <SpanStyled className={CLOSE} onClick={toggleSidebar}>
          X
        </SpanStyled>
        {bagState.length ? <FullBag pizzas={pizzas} setPizzas={setPizzas} bagState={bagState} /> : <EmptyBag isOpen={isOpen} />}
      </SideNav>
    </SideNavDivContainer>
  );
};

export default Sidebar;
