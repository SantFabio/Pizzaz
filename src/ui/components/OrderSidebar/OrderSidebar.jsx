import {
  SideNav,
  SpanStyled,
} from "./OrderSidebar.styled";

import EmptyBag from "../EmptyBag/EmptyBag";
import Order from "../Order/Order";
import DivContainer from "../DivContainer/DivContainer";
import Button from "../Button/Button";

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const CLOSE = "close";

const Sidebar = ({ pizzas, setPizzas, isOpen, setIsOpen }) => {
  const { orderState } = useSelector((state) => {
    return state;
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
          {orderState.items.length ? <Order pizzas={pizzas} setPizzas={setPizzas} /> : <EmptyBag isOpen={isOpen} />}
          {orderState.items.length ?
            <Link to={"/checkout"}>
              <Button className={CLOSE} width="100%" height="5.0rem" onClick={handleClick}>
                Escolher forma de pagamento
              </Button>
            </Link>
            : <></>}
        </SideNav>
      </DivContainer>
    </>
  );
};

export default Sidebar;
