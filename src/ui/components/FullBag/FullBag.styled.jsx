import styled from "styled-components";

export const FullBegDivContainer = styled.div`
  width: 85%;
  height: 100%;
  /* background-color: bisque; */
  display: flex;
  flex-direction: column;
`;

export const InnerContainer = styled.div`
  width: 100%;
  height: 65%;
  overflow-y: scroll;
  /* background-color: aquamarine; */
`;
export const Title = styled.div`
  font-size: ${({ theme }) => theme.font.md};
  margin: 1rem 0 1rem 0;
  `;

export const HorizontalLine = styled.hr`
  border-color: ${({ theme }) => theme.color.normal};
  margin: 1rem 0 1rem 0;
`;
export const UlStyled = styled.ul`
  li:not(:last-child) {
    border-bottom: 1px solid red; 
  }
  `;
export const ListItem = styled.li`
  /* background-color: chocolate; */
  display: grid;
  grid-template-columns: 3fr 1fr; 
  grid-template-rows: auto auto; 
  column-gap : 2.0rem;
`;

export const ProductName = styled.h1`
  /* background-color: coral; */
  align-self: center;
`;

export const ProductDescription = styled.p`
  white-space: nowrap; /* Impede a quebra de texto em várias linhas */
  overflow: hidden; /* Esconde o texto que exceder o tamanho da linha */
  text-overflow: ellipsis; /* Exibe "..." quando o texto exceder o tamanho da linha */
`;


export const RemoveButton = styled.button`
  all: unset;
  width: 11.5rem;
  height: 4.8rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: 0.1rem solid ${({ theme }) => theme.color.hover};
  border-radius: 5px;
  font-size: ${({ theme }) => theme.font.md};
  `;

export const SubtotalContainer = styled.span`
 display: flex;
 justify-content: space-between;
 `;

export const TotalContainer = styled.span`
display: flex;
justify-content: space-between;
font-size: ${({ theme }) => theme.font.md};
font-weight: bold;
margin: 0.5rem 0 1.2rem 0;
`;

export const PaymentButton = styled.button`
  /* Estilos para o botão de pagamento */
`;
