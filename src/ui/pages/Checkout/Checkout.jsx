
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
import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
import { sendOrderToDataBase } from '../../../data/service/orderService';
import { resetOrder } from '../../../data/actions/orderActions';
import { useNavigate } from 'react-router-dom';



// Componente principal
const Checkout = () => {
    const { orderState, userState } = useSelector((state) => {
        return state;
    }); const [currentStep, setCurrentStep] = useState(1);
    // const navigate = useNavigate();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const resetOrderState = () => {
        dispatch(resetOrder());
    };

    useEffect(() => {
        if (!userState.isLoggedIn) {
            navigate("/auth/")
        } else {
            navigate("/checkout")
        }
    }, [userState, navigate]);

    // Função para avançar para a próxima etapa
    const nextStep = () => {
        setCurrentStep(currentStep + 1);
    };
    const sendOrder = async () => {
        try {
            const docID = await sendOrderToDataBase(orderState);
            if (docID) {
                nextStep();
                resetOrderState();
            } else {
                console.error('Erro ao enviar o pedido: ID do documento não retornado.');
            }
        } catch (error) {
            console.log(error);
        }
    }
    // Função para retroceder para a etapa anterior
    const prevStep = () => {
        if (currentStep != 3) {
            setCurrentStep(currentStep - 1);
        }
    };
    // Renderização condicional com base na etapa atual
    // Renderização condicional com base na etapa atual
    const renderStep = () => {
        switch (currentStep) {
            case 1:
                return (
                    <OrderSummary>
                        <H1Summary>Resumo do Pedido</H1Summary>
                        <Address>
                            <h2>Endereço de entrega:</h2>
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
                        <CircleStep onClick={currentStep === 2 ? prevStep : ""}
                            className={currentStep >= 1 ? 'done' : ''}>1
                            <StepDivider currentStep={currentStep} />
                        </CircleStep>
                        Sacola de Compras
                    </ProgressStep>
                    {/* <ProgressIndicator>
                        <StepMarker></StepMarker>
                    </ProgressIndicator> */}
                    <ProgressStep className={currentStep === 2 ? 'checkout' : ''}>
                        <CircleStep className={currentStep >= 2 ? 'done' : ''}>2</CircleStep>
                        Checkout
                    </ProgressStep>
                    {/* <ProgressIndicator2>
                        <StepMarker></StepMarker>
                    </ProgressIndicator2> */}
                    <ProgressStep className={currentStep === 3 ? 'complete' : ''}>
                        <CircleStep className={currentStep >= 3 ? 'done' : ''}>3</CircleStep>
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
