import useIndex from "../../../data/hooks/pizza-data";
import Cards from "./components/Cards/Cards";
import { HrStyled, MenuStyled, UlStyled } from "./Menu.styled";
import Dropdown from "./components/Dropdown/Dropdown";
const Menu = () => {
    const pizzas = useIndex();
    return (
        <>
            <MenuStyled>
                <div>
                    <Dropdown options={['Option 1', 'Option 2', 'Option 3']} />
                    <HrStyled />
                    <UlStyled>
                        {pizzas.map(
                            pizza => (<Cards pizza={pizza} key={pizza.id}></Cards>)
                        )}
                    </UlStyled>
                </div>
            </MenuStyled>
        </>
    )
}
export default Menu;