
import { useState } from 'react';
import { 
  SideNavDivContainer,
  SideNav,
  SpanStyled,
} from "./OrderSidebar.styled"

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = (event) => {
    const outContainer = event.target.id;
    if (outContainer === "outContainer") {
      setIsOpen(!isOpen);
    }
  };

  return (
    <SideNavDivContainer id='outContainer' onClick={toggleSidebar}>
      <SideNav isOpen={isOpen}>
        
      </SideNav>
      <SpanStyled onClick={toggleSidebar}>X</SpanStyled>
    </SideNavDivContainer>
  );
};

export default Sidebar;
