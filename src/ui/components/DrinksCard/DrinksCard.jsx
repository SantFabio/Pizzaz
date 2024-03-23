import { LiStyled, ImgItem, ButtonContainer, CounterButton } from "./DrinksCard.styled";

const DrinksCard = ({ drink }) =>{
    return(
        <LiStyled>
            <ImgItem src={drink.image} alt={drink.name} />
            <ButtonContainer>
                <CounterButton>-</CounterButton>
                <div>1</div>
                <CounterButton>+</CounterButton>
            </ButtonContainer>
        </LiStyled>
    )
}
export default DrinksCard;