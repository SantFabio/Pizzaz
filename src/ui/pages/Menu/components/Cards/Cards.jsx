import CardStyled from "./Cards.styled";
import PropTypes from 'prop-types';

const Cards = ({ pizza }) => {
    return (
        <>
            <CardStyled >
                <img src={pizza.imagemUrl} alt={pizza.nome} />
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

Cards.propTypes = {
    pizza: PropTypes.shape({
        id: PropTypes.number.isRequired,
        nome: PropTypes.string.isRequired,
        ingredientes: PropTypes.arrayOf(PropTypes.string).isRequired,
        preco: PropTypes.number.isRequired,
        tamanho: PropTypes.string.isRequired,
        vegetariana: PropTypes.bool.isRequired,
        disponivel: PropTypes.bool.isRequired,
        imagemUrl: PropTypes.string.isRequired,
        descricao: PropTypes.string.isRequired
    }).isRequired
};
export default Cards;