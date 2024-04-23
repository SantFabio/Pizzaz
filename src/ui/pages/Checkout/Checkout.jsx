
import { useState } from 'react';
import styled from 'styled-components';
import { useSelector } from "react-redux";
import FullBag from '../../components/Order/Order';

// Estilos dos componentes usando styled-components
const Container = styled.div`
  font-family: Arial;
  font-size: 17px;
  padding: 8px;
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -16px;
`;

const Column = styled.div`
  flex: ${props => props.size};
  padding: 0 16px;
`;

const FormContainer = styled.div`
  background-color: #f2f2f2;
  padding: 5px 20px 15px 20px;
  border: 1px solid lightgrey;
  border-radius: 3px;
`;

// const Input = styled.input`
//   width: 100%;
//   margin-bottom: 20px;
//   padding: 12px;
//   border: 1px solid #ccc;
//   border-radius: 3px;
// `;

// const Label = styled.label`
//   margin-bottom: 10px;
//   display: block;
// `;

// const Button = styled.input`
//   background-color: #04AA6D;
//   color: white;
//   padding: 12px;
//   margin: 10px 0;
//   border: none;
//   width: 100%;
//   border-radius: 3px;
//   cursor: pointer;
//   font-size: 17px;
// `;


// Componente principal
const Checkout = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const bagState = useSelector((state) => {
        return state.orderState;
    });

    // Função para avançar para a próxima etapa
    const nextStep = () => {
        setCurrentStep(currentStep + 1);
    };

    // Função para retroceder para a etapa anterior
    const prevStep = () => {
        setCurrentStep(currentStep - 1);
    };

    // Renderização condicional com base na etapa atual
    // Renderização condicional com base na etapa atual
    const renderStep = () => {
        switch (currentStep) {
            case 1:
                return (
                    <div>
                        <FullBag bagState={bagState} ></FullBag>
                        <button onClick={nextStep}>Next</button>
                    </div>
                );
            case 2:
                return (
                    <div>
                        <h2>Step 2: Payment</h2>
                        {/* Conteúdo para a etapa 2 - Formas de pagamento */}
                        <p>Escolha uma forma de pagamento:</p>
                        <ul>
                            <li>Cartão de crédito</li>
                            <li>Pagamento via PayPal</li>
                            {/* Adicione outras opções de pagamento aqui */}
                        </ul>
                        <button onClick={prevStep}>Back</button>
                        <button onClick={nextStep}>Next</button>
                    </div>
                );
            case 3:
                return (
                    <div>
                        <h2>Step 3: Order Complete</h2>
                        {/* Conteúdo para a etapa 3 - Pedido completo */}
                        <p>Obrigado pelo seu pedido! Ele será enviado em breve.</p>
                        <button onClick={prevStep}>Back</button>
                    </div>
                );
            default:
                return null;
        }
    };


    return (
        <Container>
            <h2>Responsive Checkout Form</h2>
            <p>Resize the browser window to see the effect. When the screen is less than 800px wide, make the two columns stack on top of each other instead of next to each other.</p>
            <div >
                <ul>
                    <li className={currentStep === 1 ? 'cart' : ''}>
                        <span className="step">1</span>Shopping Cart
                    </li>
                    <li className={currentStep === 2 ? 'checkout' : ''}>
                        <span className="step">2</span>Checkout
                    </li>
                    <li className={currentStep === 3 ? 'complete' : ''}>
                        <span className="step">3</span>Order Complete
                    </li>
                </ul>
            </div>
            <Row>
                <Column size="75%">
                    <FormContainer>
                        {/* Renderiza a etapa atual */}
                        {renderStep()}
                    </FormContainer>
                </Column>
            </Row>
        </Container>
    );
};

export default Checkout;
