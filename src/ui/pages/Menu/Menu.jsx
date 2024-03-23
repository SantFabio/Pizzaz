
import Cards from "../../components/Cards/Cards";
import { HrStyled, MenuStyled, UlStyled } from "./Menu.styled";
import Dropdown from "../../components/Dropdown/Dropdown";
import db from "../../../data/service/firebase"
import { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
const Menu = () => {
    const [pizzas, setPizzas] = useState([]);
    useEffect(()=>{
        onSnapshot(collection(db,"pizzas"), (snapshot) =>
            setPizzas(snapshot.docs.map( doc =>( {...doc.data(), id: doc.id})))
        );
    },[]);
    return (
        <>
            <MenuStyled>
                <div>
                    <Dropdown options={['Menor preço', 'Maior preço']} />
                    <HrStyled />
                    <UlStyled>
                        {pizzas.map(
                            (pizza) => (<Cards pizza={pizza} key={pizza.id}></Cards>)
                        )}
                    </UlStyled>
                </div>
            </MenuStyled>
        </>
    )
}
export default Menu;