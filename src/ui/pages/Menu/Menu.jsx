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
    const array = [1, 2, 3];

    return (
        <>
            <MenuStyled>
                <div>
                    <Dropdown options={['Menor preço', 'Maior preço']} />
                    <HrStyled />
                    <UlStyled>
                        {
                            pizzas === null ? array.map((index) => (<CardSkeleton key={index} />)) :
                                pizzas.map(
                                    (pizza) => (
                                        <Cards
                                            pizza={pizza}
                                            key={pizza.id}
                                            setIsOpenPizzaModal={setIsOpenPizzaModal}
                                            setPizzaInFocus={setPizzaInFocus}
                                        >
                                        </Cards>
                                    )
                                )
                        }
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