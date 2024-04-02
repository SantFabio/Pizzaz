
import Checkbox from "../Checkbox/Checkbox";
import {
  LiStyled,
  ImgItem,
  PriceItem,
  PriceAndCheckBox,
} from "./DrinksCard.styled";

const DrinksCard = ({ drink }) => {
  return (
    <LiStyled>
      <div>
        <ImgItem src={drink.image} alt={drink.nome} />
        <span>{drink.nome}</span>
      </div>
      <PriceAndCheckBox>
        <PriceItem>{drink.preco},00</PriceItem>
        <Checkbox drink={drink} />
      </PriceAndCheckBox>
      {/* <ButtonContainer>
                <CounterButton>-</CounterButton>
                <div>1</div>
                <CounterButton>+</CounterButton>
            </ButtonContainer> */}
    </LiStyled>
  );
};
export default DrinksCard;
