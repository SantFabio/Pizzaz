import { useState } from 'react';
import {
    Container,
    PaymentMethodSelector,
    PaymentMethodButton,
    Content,
    Row,
    Column,
} from "./ChoosePaymentMethod.styled";
import FormInput from '../FormInput/FormInput';

const ChoosePaymentMethod = () => {
    const [selectedOption, setSelectedOption] = useState('creditCard');
    const [formData, setFormData] = useState({
        cardName: '',
        cardNumber: '',
        expMonth: '',
        expYear: '',
        cvv: ''
    });

    const handleOptionChange = (option) => {
        setSelectedOption(option);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    return (
        <Container>
            <PaymentMethodSelector>
                <PaymentMethodButton
                    onClick={() => handleOptionChange('creditCard')}
                    active={selectedOption === 'creditCard'}
                >
                    Credit Card
                </PaymentMethodButton>
                <PaymentMethodButton
                    onClick={() => handleOptionChange('pix')}
                    active={selectedOption === 'pix'}
                >
                    Pix
                </PaymentMethodButton>
            </PaymentMethodSelector>
            <Content>
                {selectedOption === 'creditCard' && (
                    <>
                        <FormInput htmlFor={"cname"} label={"Nome no cartão"} type="text" id="cname" name="cardName" placeholder="John More Doe" value={formData.cardName} onChange={handleChange} ></FormInput>
                        <FormInput label={"Cartão de credito"} htmlFor={"ccnum"} type="text" id="ccnum" name="cardNumber" placeholder="1111-2222-3333-4444" value={formData.cardNumber} onChange={handleChange} />
                        <Row>
                            <Column>
                                <FormInput label={"Mês de expiração"} htmlFor={"expmonth"} type="text" id="expmonth" name="expMonth" placeholder="September" value={formData.expMonth} onChange={handleChange} />
                            </Column>
                            <Column>
                                <FormInput label={"Ano de Expiração"} htmlFor={"expYear"} type="text" id="expyear" name="expYear" placeholder="2018" value={formData.expYear} onChange={handleChange} />
                            </Column>
                        </Row>
                        <label htmlFor="cvv">CVV</label>
                        <FormInput type="text" id="cvv" name="cvv" placeholder="352" value={formData.cvv} onChange={handleChange} />
                    </>
                )}
                {selectedOption === 'pix' && (
                    <p>Ao Fazer Pedido use o código QR ou chave Pix para efetuar o pagamento.</p>
                )}
            </Content>
        </Container>
    );
};

export default ChoosePaymentMethod;
