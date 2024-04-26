import styled from "styled-components";
// Estilos dos componentes usando styled-components
export const Container = styled.div`
  font-family: Arial;
  font-size: 17px;
  padding: 8px;
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -16px;
  `;

export const Column = styled.div`
  flex: ${props => props.size};
  padding: 0 16px;
  display: flex;
  justify-content: center;
  `;

export const FormContainer = styled.div`
  /* background-color: #f2f2f2; */
  height: auto;
  width: 100%;
  max-width: 75.0rem;
  border: 1px solid lightgrey;
  border-radius: 3px;
`;
export const OrderSummary = styled.div`
  padding: 2.0rem 20% 2.0rem 20%;
`;
export const CheckoutProgress = styled.div`
  /* background-color: cadetblue; */
  display: flex;
  justify-content: center;
  margin: 5.0rem 0 5.0rem 0;

`;
export const UlProgressCheckout = styled.ul`
    background-color: aliceblue;
    width: 100%;
  max-width: 75.0rem;
  display: flex;
  justify-content: space-between;
  position: relative;
`;
export const ProgressStep = styled.li`
background-color: #4169e145;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 5.0rem;
  height: 8.6rem;
  font-size: ${({ theme }) => (theme.font.md)};
  font-weight: bold;
  white-space: nowrap;
`;

export const CircleStep = styled.div`
  width: 5.0rem;
  height: 5.0rem;
  border-radius: 50%;
  border: 0.1rem solid ${({ theme }) => (theme.color.primary)};
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${({ theme }) => (theme.font.lg)};
  /* color: ${({ theme }) => (theme.color.secondary)}; */
  color: ${({ theme }) => (theme.color.black)};
  /* background-color: ${({ theme }) => (theme.color.primary)}; */
  /* background-color: ${({ theme }) => (theme.color.secondary)}; */
`;


export const StepDivider = styled.span`
  content: " ";
  width: 100%;
  height: 5px;
  display: block;
  background-color: #ebeaef;
  position: absolute;
  /* top: 50%; */
  left: 0;
  /* transform: translateY(-50%); */
  z-index: 1;
`;
export const H1Summary = styled.h1`
  color: ${({ theme }) => (theme.color.black)};
  font-size: ${({ theme }) => (theme.font.xl)};
  margin-bottom: 2.0rem;
`;