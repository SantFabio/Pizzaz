
import CardStyled from "./Cards.styled";

const Cards = ({ pizza, setIsOpenPizzaModal, setPizzaInFocus }) => {
    const handleClick = () => {
        setIsOpenPizzaModal(true);
        setPizzaInFocus(pizza);
    }
    return (
        <>
            <CardStyled onClick={handleClick}>
                <img src={pizza.image} alt={pizza.nome} />
                <div className="pizza-data">
                    <h1>{pizza.nome}</h1>
                    <p className="description">{pizza.descricao}</p>
                    <hr />
                    <p className="priceItem">{pizza.preco} R$</p>
                </div>
            </CardStyled>
        </>
    )
}

export default Cards;