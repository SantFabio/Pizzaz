
import { useEffect, useState } from 'react';
import Order from '../../components/Order/Order';
import foodDelivery from "../../../assets/img/foodDelivery.svg"
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
    Address,
    FoodDeliveryImg,
    H1OrderReceived,
    H2OrderReceived,
} from "./Checkout.styled"
import ChoosePaymentMethod from '../../components/ChoosePaymentMethod/ChoosePaymentMethod';
import Button from '../../components/Button/Button';
import LocationAddressInput from '../../components/LocationAddressInput/LocationAddressInput';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { sendOrderToDataBase } from '../../../data/service/orderService';



// Componente principal
const Checkout = () => {
    const { orderState } = useSelector((state) => (state));
    const [currentStep, setCurrentStep] = useState(1);
    const navigate = useNavigate();

    useEffect(() => {
        if (orderState.items.length === 0) {
            navigate("/menu");
        }
    }, [orderState.items, navigate]);

    // Função para avançar para a próxima etapa
    const nextStep = () => {
        setCurrentStep(currentStep + 1);
    };
    const sendOrder = async () => {
        try {
            await sendOrderToDataBase(orderState);
        } catch (error) {
            console.log(error);
        }
    }
    // Função para retroceder para a etapa anterior
    const prevStep = () => {
        setCurrentStep(currentStep - 1);
    };
    useEffect(() => {

    })
    // Renderização condicional com base na etapa atual
    // Renderização condicional com base na etapa atual
    const renderStep = () => {
        switch (currentStep) {
            case 1:
                return (
                    <OrderSummary>
                        <H1Summary>Resumo do Pedido</H1Summary>
                        <Address>
                            <h2>Endereço de entraga:</h2>
                            <LocationAddressInput></LocationAddressInput>
                        </Address>
                        <Order />
                        <Button onClick={nextStep} width={"100%"} height={"4.5rem"}>Continuar</Button>
                    </OrderSummary>
                );
            case 2:
                return (
                    <>
                        <OrderSummary>
                            <ChoosePaymentMethod></ChoosePaymentMethod>
                            <Button onClick={sendOrder} width={"100%"} height={"4.5rem"}>Finalizar pedido</Button>
                        </OrderSummary>
                    </>
                );
            case 3:
                return (
                    <OrderSummary>
                        <FoodDeliveryImg src={foodDelivery} alt="moto" />
                        <H1OrderReceived>Pedido Recebido</H1OrderReceived>
                        <H2OrderReceived>Acompanhar pedido?</H2OrderReceived>
                        <Button onClick={prevStep} width={"100%"} height={"4.5rem"}>Pedidos</Button>
                    </OrderSummary>
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
                        Sacola de Compras
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
                        Pedido Feito
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
