import { useEffect, useState } from 'react';
import location from "../../../assets/img/location.svg";
import { useJsApiLoader, GoogleMap, Marker } from "@react-google-maps/api"
import { getLocationCoordinates, API_KEY } from "../../../data/service/geoLocationService"
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
    ImgBack,
} from "./LocationAddressInput.styled";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import FormInput from "../FormInput/FormInput";
import back from "../../../assets/img/back.svg";
import { updateAddress } from '../../../data/service/userDataService';

const LocationAddressInput = ({ userState }) => {

    const [isOpen, setIsOpen] = useState(false);
    const [index, setIndex] = useState(true);
    // solicitação para saber se o usuario deseja usar a localização pelo dispositivo
    // const [userLocation, setUserLocation] = useState(null);
    const [coordinates, setCoordinates] = useState(
        {
            latitude: -1.302949,
            longitude: -47.884073
        });

    const [formData, setFormData] = useState({
        street: '',
        number: '',
        neighborhood: '',
        city: '',
        state: '',
        country: '',
        zip: '',
        coordinates: {
            latitude: 0,
            longitude: 0,
        }
    });
    useEffect(() => {
        console.log(coordinates);
    }, [coordinates]);

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: API_KEY,
    });

    const handleModal = (event) => {
        if (event && event.target.id === "modal") {
            setIsOpen(false);
        } else {
            setIsOpen(true);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormData({ ...formData, coordinates: coordinates });
        try {
            await updateAddress(userState.user.uid, formData);
            setIsOpen(false);
            setIndex(!index);
        } catch (error) {
            alert("Erro ao atualizar o endereço:", error);
        }
        resetFormData();
    };
    const resetFormData = () => {
        setFormData({
            street: '',
            number: '',
            neighborhood: '',
            city: '',
            state: '',
            country: '',
            zip: '',
            coordinates: {
                latitude: 0,
                longitude: 0,
            }
        });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };


    const handleIndex = async (e) => {
        e.preventDefault();
        const locationString = Object.values(formData).join(",");
        try {
            const locationCoordinates = await getLocationCoordinates(locationString);
            setCoordinates({
                latitude: locationCoordinates.latitude,
                longitude: locationCoordinates.longitude
            });
        } catch (error) {
            console.log(error);
        }
        setIndex(!index);
    };
    const handleEmptyInput = (e) => {
        e.preventDefault();
    };

    const handleMapClick = (event) => {
        setCoordinates({
            latitude: event.latLng.lat(),
            longitude: event.latLng.lng()
        });
    };

    return (
        <>
            <ImgLocationButton src={location} onClick={handleModal} />
            <Modal handleModal={handleModal} isOpen={isOpen}>
                <DivContainer>
                    <Form index={index}>
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
                                    type="number"
                                    required
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
                                    required
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
                                    required
                                />
                            </GridItem>
                        </FormGrid>
                        <Button onClick={Object.values(formData).every(value => value !== '') ? handleIndex : handleEmptyInput} width={"100%"} height={"4.5rem"}>Avançar</Button>
                        {/* <Button type="submit" width={"100%"} height={"4.5rem"}>Avançar</Button> */}
                    </Form>

                    {/* {segunda parte, parte do mapa} */}

                    <MapContainer index={index}>

                        <ImgBack src={back} alt="retornar" onClick={handleIndex} />
                        {isLoaded ? (
                            <ContainerMap>

                                <GoogleMap
                                    mapContainerStyle={{
                                        height: "100%",
                                        width: "100%"
                                    }}
                                    zoom={15}
                                    center={{ lat: coordinates.latitude, lng: coordinates.longitude }}
                                    options={{
                                        mapTypeId: 'roadmap',
                                        streetViewControl: false,
                                        fullscreenControl: false,
                                        mapTypeControl: false,
                                        zoomControl: true,
                                    }}
                                    onClick={handleMapClick}
                                >
                                    <Marker position={
                                        { lat: coordinates.latitude, lng: coordinates.longitude }
                                    } />
                                </GoogleMap>
                            </ContainerMap>
                        ) : (
                            <LoadMap>Carregando o mapa...</LoadMap>
                        )}
                        <ButtonContainer>
                            <Button onClick={handleSubmit} width={"100%"} height={"4.5rem"}>Adicionar</Button>
                        </ButtonContainer>
                    </MapContainer>
                </DivContainer>
            </Modal>
        </>
    );
};
export default LocationAddressInput;