
import Cards from "../../components/Cards/Cards";
import {
    HrStyled,
    MenuStyled,
    UlStyled
} from "./Menu.styled";
import Dropdown from "../../components/Dropdown/Dropdown";
import { useState } from "react";
import PizzaModal from "../../components/PizzaModal/PizzaModal";

const Menu = ({ pizzas }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [pizzaInFocus, setPizzaInFocus] = useState(null);

    return (
        <>
            <MenuStyled>
                <div>
                    <Dropdown options={['Menor preço', 'Maior preço']} />
                    <HrStyled />
                    <UlStyled>
                        {pizzas.map(
                            (pizza) => (
                                <Cards
                                    pizza={pizza}
                                    key={pizza.id}
                                    setIsOpen={setIsOpen}
                                    setPizzaInFocus={setPizzaInFocus}
                                >
                                </Cards>
                            )
                        )}
                    </UlStyled>
                </div>
                {
                    isOpen ? <PizzaModal 
                    pizzaInFocus={pizzaInFocus}
                    setIsOpen={setIsOpen}
                    /> : null
                }
            </MenuStyled>
        </>
    )
}
export default Menu;