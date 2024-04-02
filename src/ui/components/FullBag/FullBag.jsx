import {
    FullBegDivContainer,
} from "./FullBag.styled"
const FullBag = ({bagState}) =>{
    console.log(bagState);
    return(
        <>
        <FullBegDivContainer>
            <div>
            <span>Seu pedido:</span>
            <hr />
            {bagState.map((item) => (
                <li key={item.produtoId}>
                    <h1>nome do produto</h1>
                    
                </li>
            ))}
            </div>
        </FullBegDivContainer>
        </>
    )
}
export default FullBag;