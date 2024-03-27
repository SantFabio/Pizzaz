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
      <ImgItem src={drink.image} alt={drink.name} />
      <PriceAndCheckBox>
        <PriceItem>{drink.preco},99</PriceItem>
        <Checkbox id={drink.id} />
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
