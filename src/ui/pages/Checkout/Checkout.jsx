
import { useState } from 'react';
import { useSelector } from "react-redux";
import FullBag from '../../components/Order/Order';
import {
    Container,
    Row,
    Column,
    FormContainer,
    CheckoutProgress,
    ProgressStep,
    CircleStep,
    UlProgressCheckout,
    OrderSummary,
    StepDivider,
    H1Summary,
} from "./Checkout.styled"
import ChoosePaymentMethod from '../../components/ChoosePaymentMethod/ChoosePaymentMethod';
// Estilos dos componentes usando styled-components


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
                    <OrderSummary>
                        <H1Summary>Resumo do Pedido</H1Summary>
                        <FullBag bagState={bagState} ></FullBag>
                        <button onClick={nextStep}>Continuar</button>
                    </OrderSummary>
                );
            case 2:
                return (
                    <>
                        <OrderSummary>
                            <ChoosePaymentMethod></ChoosePaymentMethod>
                        </OrderSummary>
                    </>
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
            <CheckoutProgress >
                <UlProgressCheckout>
                    <ProgressStep className={currentStep === 1 ? 'cart' : ''}>
                        <CircleStep onClick={currentStep === 2 ? prevStep : ""}>1
                            <StepDivider />
                        </CircleStep>
                        Shopping Cart
                    </ProgressStep>
                    {/* <ProgressIndicator>
                        <StepMarker></StepMarker>
                    </ProgressIndicator> */}
                    <ProgressStep className={currentStep === 2 ? 'checkout' : ''}>
                        <CircleStep>2</CircleStep>
                        Checkout
                    </ProgressStep>
                    {/* <ProgressIndicator2>
                        <StepMarker></StepMarker>
                    </ProgressIndicator2> */}
                    <ProgressStep className={currentStep === 3 ? 'complete' : ''}>
                        <CircleStep>3</CircleStep>
                        Order Complete
                    </ProgressStep>
                </UlProgressCheckout>
            </CheckoutProgress>
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
