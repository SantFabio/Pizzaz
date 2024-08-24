import { useState } from "react";
import Cards from "../../components/Cards/Cards";
import {
    HrStyled,
    MenuStyled,
    UlStyled
} from "./Menu.styled";
import Dropdown from "../../components/Dropdown/Dropdown";
import PizzaDetails from "../../components/PizzaDetails/PizzaDetails";
import { CardSkeleton } from "../../components/CardSkeleton/CardSkeleton";

const Menu = ({ pizzas, setIsOpen }) => {
    const [isOpenPizzaModal, setIsOpenPizzaModal] = useState(false);
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
                                // <Cards
                                //     pizza={pizza}
                                //     key={pizza.id}
                                //     setIsOpenPizzaModal={setIsOpenPizzaModal}
                                //     setPizzaInFocus={setPizzaInFocus}
                                // >
                                // </Cards>
                                <CardSkeleton key={pizza.id} />
                            )
                        )}
                    </UlStyled>
                </div>
                {
                    isOpenPizzaModal ? <PizzaDetails
                        pizzaInFocus={pizzaInFocus}
                        setIsOpenPizzaModal={setIsOpenPizzaModal}
                        setIsOpen={setIsOpen}
                    /> : null
                }
            </MenuStyled>
        </>
    )
}
export default Menu;