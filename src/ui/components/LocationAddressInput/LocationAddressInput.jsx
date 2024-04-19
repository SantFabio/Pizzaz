import { useState } from 'react';
import location from "../../../assets/img/location.svg";
import { useJsApiLoader, GoogleMap, Marker } from "@react-google-maps/api"
import useGeolocation from "../../../data/hooks/useGeolocation"
import {
    ImgLocationButton,
    DivContainer,
    FormGrid,
    GridItem,
    Form,
    TitleH1,
    MapContainer,
    LoadMap,
    ButtonContainer,
    ContainerMap,
} from "./LocationAddressInput.styled";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import FormInput from "../FormInput/FormInput";

const API_KEY = "AIzaSyCbaI2f4Fpaeq0DpMq9ZG0fVntdW2K5UOw";

const LocationAddressInput = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [index, setIndex] = useState(true);
    const { latitude, longitude } = useGeolocation();
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: API_KEY,
    });

    const [formData, setFormData] = useState({
        street: '',
        number: '',
        neighborhood: '',
        city: '',
        state: '',
        country: '',
        zip: ''
    });

    const handleModal = (event) => {
        if (event.target.id === "modal") {
            setIsOpen(false);
        } else {
            setIsOpen(true);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };
    const handleIndex = (e) => {
        e.preventDefault();
        setIndex(!index);
    };

    return (
        <>
            <ImgLocationButton src={location} onClick={handleModal} />
            <Modal handleModal={handleModal} isOpen={isOpen}>
                <DivContainer>
                    <Form onSubmit={handleSubmit} index={index}>
                        <TitleH1>Endereço</TitleH1>
                        <FormGrid>
                            <GridItem area="street">
                                <FormInput
                                    label="Rua"
                                    htmlFor="street"
                                    placeholder="Digite o nome da rua"
                                    name="street"
                                    value={formData.street}
                                    handleChange={handleChange}
                                    required
                                    type="text"
                                />
                            </GridItem>
                            <GridItem area="number">
                                <FormInput
                                    label="Número"
                                    htmlFor="number"
                                    placeholder="Digite o número"
                                    name="number"
                                    value={formData.number}
                                    handleChange={handleChange}
                                    type="text"
                                />
                            </GridItem>
                            <GridItem area="neighborhood">
                                <FormInput
                                    label="Bairro"
                                    htmlFor="neighborhood"
                                    placeholder="Digite o bairro"
                                    name="neighborhood"
                                    value={formData.neighborhood}
                                    handleChange={handleChange}
                                    type="text"
                                />
                            </GridItem>
                            <GridItem area="city">
                                <FormInput
                                    label="Cidade"
                                    htmlFor="city"
                                    placeholder="Digite a cidade"
                                    name="city"
                                    value={formData.city}
                                    handleChange={handleChange}
                                    required
                                    type="text"
                                />
                            </GridItem>
                            <GridItem area="state">
                                <FormInput
                                    label="Estado"
                                    htmlFor="state"
                                    placeholder="Digite o estado"
                                    name="state"
                                    value={formData.state}
                                    handleChange={handleChange}
                                    required
                                    type="text"
                                />
                            </GridItem>
                            <GridItem area="country">
                                <FormInput
                                    label="País"
                                    htmlFor="country"
                                    placeholder="Digite o país"
                                    name="country"
                                    value={formData.country}
                                    handleChange={handleChange}
                                    required
                                    type="text"
                                />
                            </GridItem>
                            <GridItem area="zip">
                                <FormInput
                                    label="CEP"
                                    htmlFor="zip"
                                    placeholder="Digite o CEP"
                                    name="zip"
                                    value={formData.zip}
                                    handleChange={handleChange}
                                    type="text"
                                />
                            </GridItem>
                        </FormGrid>
                        <Button onClick={handleIndex} width={"100%"} height={"4.5rem"}>Avançar</Button>
                        {/* <Button type="submit" width={"100%"} height={"4.5rem"}>Avançar</Button> */}
                    </Form>

                    {/* {segunda parte, parte do mapa} */}

                    <MapContainer index={index}>
                        {isLoaded ? (
                            <ContainerMap>

                                <GoogleMap
                                    mapContainerStyle={{
                                        height: "100%",
                                        width: "100%"
                                    }}
                                    zoom={15}
                                    center={{ lat: latitude, lng: longitude }}
                                    options={{
                                        mapTypeId: 'roadmap',
                                        streetViewControl: false,
                                        fullscreenControl: false,
                                        mapTypeControl: false,
                                        zoomControl: true
                                    }}
                                >
                                    <Marker position={{ lat: latitude, lng: longitude }} />
                                </GoogleMap>
                            </ContainerMap>
                        ) : (
                            <LoadMap>Carregando o mapa...</LoadMap>
                        )}
                        <ButtonContainer>
                            <Button onClick={handleIndex} width={"100%"} height={"4.5rem"}>Voltar</Button>
                        </ButtonContainer>
                    </MapContainer>
                </DivContainer>
            </Modal>
        </>
    );
};
export default LocationAddressInput;