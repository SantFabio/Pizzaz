import {
  SideNavDivContainer,
  SideNav,
  SpanStyled,
} from "./OrderSidebar.styled";
import EmptyBag from "../EmptyBag/EmptyBag";
import { useSelector } from "react-redux";
import FullBag from "../FullBag/FullBag";

const CLOSE = "close";
const Sidebar = ({ isOpen, setIsOpen }) => {
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
        {bagState ? <FullBag bagState={bagState} /> : <EmptyBag isOpen={isOpen} />}
      </SideNav>
    </SideNavDivContainer>
  );
};

export default Sidebar;
