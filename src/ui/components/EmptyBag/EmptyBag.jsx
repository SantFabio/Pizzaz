import emptyBegImg from "../../../assets/img/emptyBegImg.svg";
import {
    EmptyBegDivImgContainer,
    EmptyBegImg,
    H1Styled,
    PStyled,
 } from "./EmptyBag.styled";
const EmptyBag = () => {
  return (
    <>
      <EmptyBegDivImgContainer>
        <EmptyBegImg src={emptyBegImg} alt="" />
        <H1Styled>Sua sacola está vazia</H1Styled>
        <PStyled>Adicione itens</PStyled>
      </EmptyBegDivImgContainer>
    </>
  );
};
export default EmptyBag;
