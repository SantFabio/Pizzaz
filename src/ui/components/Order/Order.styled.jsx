import styled from "styled-components";

export const FullBegDivContainer = styled.div`
  width: 100%;
  height: 95%;
  display: flex;
  flex-direction: column;
  /* background-color: bisque; */
`;

export const InnerContainer = styled.div`
  width: 100%;
  height: 90%;
  overflow-y: auto;
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
    border-bottom: 1px solid ${({ theme }) => theme.color.third}; 
  }
  /* background-color: aquamarine; */
  `;
export const ListItem = styled.li`
  /* background-color: chocolate; */
  display: grid;
  grid-template-columns: auto auto; 
  grid-template-rows: auto auto; 
  row-gap : 0.5rem;
  margin-bottom: 0.5rem;
  justify-content: space-between;
`;

export const ProductName = styled.h1`
  /* background-color: coral; */
  align-self: center;
  width: 100%;
`;

export const ProductDescription = styled.p`
  /* width: 100%; */
  white-space: nowrap; /* Impede a quebra de texto em várias linhas */
  overflow: hidden; /* Esconde o texto que exceder o tamanho da linha */
  text-overflow: ellipsis; /* Exibe "..." quando o texto exceder o tamanho da linha */
  /* background-color: aquamarine; */
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
  /* background-color: blue; */
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
