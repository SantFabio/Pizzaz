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
  background-color: ${({ theme }) => (theme.color.normal)};
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
    /* background-color: #db8018; */
  width: 100%;
  max-width: 75.0rem;
  display: flex;
  justify-content: space-between;
  position: relative;
`;
export const ProgressStep = styled.li`
/* background-color: #4169e145; */
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
  color: ${(props) => (props.className === "done" ?
    props.theme.color.secondary :
    props.theme.color.black
  )};
  background-color: ${(props) => (props.className === "done" ?
    props.theme.color.third : props.theme.color.secondary)
  };
  /* position: relative;
  z-index: 1000; */
`;


export const StepDivider = styled.span`
  content: " ";
  width: ${({ currentStep }) => {
    if (currentStep == 3) {
      return "100%"
    } else if (currentStep == 2) {
      return "50%"
    } else {
      return "";
    }
  }
  };
  height: 5px;
  display: block;
  background-color: #633ff5;
  position: absolute;
/* top: 50%; */
  left: 0;
/* transform: translateY(-50%); */
  z-index: -1;
`;

export const H1Summary = styled.h1`
color: ${({ theme }) => (theme.color.black)};
font-size: ${({ theme }) => (theme.font.xl)};
margin-bottom: 2.0rem;
`;
export const Address = styled.div`
width: 100%;
height: 5.5rem;
background-color: ${({ theme }) => (theme.color.hover)};
padding: 0 1.0rem 0 1.0rem;
margin-bottom: 1.0rem;
border-radius: 0.5rem;
`;
export const FoodDeliveryImg = styled.img`
width: 100%;
`;
export const H1OrderReceived = styled.h1`
text-align: center;
font-size: ${({ theme }) => (theme.font.xx)};
color: ${({ theme }) => (theme.color.black)};
margin-bottom: 2.0rem;
`;
export const H2OrderReceived = styled.h2`
font-size: ${({ theme }) => (theme.font.lg)};
color: ${({ theme }) => (theme.color.black)};
text-align: center;
margin-bottom: 2.0rem;

`;