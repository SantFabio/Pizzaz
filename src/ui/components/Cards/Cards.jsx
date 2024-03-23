import CardStyled from "./Cards.styled";
// import PropTypes from 'prop-types';

const Cards = ({ pizza }) => {
    return (
        <>
            <CardStyled  >
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