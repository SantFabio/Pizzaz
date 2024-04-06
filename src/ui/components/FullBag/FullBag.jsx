import { useDispatch } from "react-redux";
import CounterButton from "../CounterButton/CounterButton";
import { useSelector } from "react-redux";
import {
  FullBegDivContainer,
  Title,
  HorizontalLine,
  ListItem,
  ProductName,
  ProductDescription,
  RemoveButton,
  SubtotalContainer,
  TotalContainer,
  InnerContainer,
  UlStyled,
} from "./FullBag.styled";
import { removeItem } from "../../../data/actions/orderActions";
import Button from "../Button/Button";

const FullBag = ({ bagState }) => {
  const dispatch = useDispatch();
  const orderState = useSelector((state) => {
    return state;
  });
  const totalPrice =
    orderState.length > 0
      ? orderState
          .map((item) => item.precoUnitario * item.quantidade)
          .reduce((accumulator, currentValue) => accumulator + currentValue)
      : 0;
  return (
    <FullBegDivContainer>
      <InnerContainer>
        <Title>Seu pedido:</Title>
        <HorizontalLine />
        <UlStyled>
          {bagState.map((item, index) => (
            <ListItem key={index}>
              <ProductName>{item.nomeProduto}</ProductName>
              <CounterButton item={item} dispatch={dispatch} />
              <ProductDescription>{item.descricao}</ProductDescription>
              <RemoveButton
                onClick={() => {
                  dispatch(removeItem(item.produtoId));
                }}
              >
                Remover
              </RemoveButton>
            </ListItem>
          ))}
        </UlStyled>
      </InnerContainer>
      <SubtotalContainer>
        <div>Subtotal</div>
        <div>R$ {totalPrice},00</div>
      </SubtotalContainer>
      <TotalContainer>
        <span>Total</span>
        <div>R$ {totalPrice},00</div>
      </TotalContainer>
      <Button width="100%" height="5.0rem">
        Escolher forma de pagamento
      </Button>
    </FullBegDivContainer>
  );
};

export default FullBag;
