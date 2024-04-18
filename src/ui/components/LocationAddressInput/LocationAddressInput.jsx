import { useState } from 'react';
import location from "../../../assets/img/location.svg"
import {
    ImgLocationButton,
    // LoadMap,
    DivConteiner,
    FormGrid,
    GridItem,
} from "./LocationAddressInput.styled";
import Button from "../Button/Button"
import Modal from "../Modal/Modal";
// import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
// import useGeolocation from "../../../data/hooks/useGeolocation";
import Input from "../Input/Input";

// const API_KEY = "AIzaSyCbaI2f4Fpaeq0DpMq9ZG0fVntdW2K5UOw"; // Substitua "SUA_CHAVE_API" pela sua chave da API do Google Maps

const LocationAddressInput = () => {
    const [isOpen, setIsOpen] = useState(false);

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
        console.log(formData); // Aqui você pode enviar os dados do formulário para o servidor ou realizar outras operações
    };

    return (
        <>
            <ImgLocationButton src={location} onClick={handleModal}></ImgLocationButton>
            <Modal handleModal={handleModal} isOpen={isOpen}>
                <DivConteiner>
                    <form onSubmit={handleSubmit}>
                        <FormGrid>
                            <GridItem area="street">
                                <label htmlFor="street">Rua:</label>
                                <Input>
                                    <input type="text" id="street" name="street" value={formData.street} onChange={handleChange} required />
                                </Input>
                            </GridItem>
                            <GridItem area="number">
                                <label htmlFor="number">Número:</label>
                                <Input>
                                    <input type="text" id="number" name="number" value={formData.number} onChange={handleChange} />
                                </Input>
                            </GridItem>
                            <GridItem area="neighborhood">
                                <label htmlFor="neighborhood">Bairro:</label>
                                <Input>
                                    <input type="text" id="neighborhood" name="neighborhood" value={formData.neighborhood} onChange={handleChange} />
                                </Input>
                            </GridItem>
                            <GridItem area="city">
                                <label htmlFor="city">Cidade:</label>
                                <Input>
                                    <input type="text" id="city" name="city" value={formData.city} onChange={handleChange} required />
                                </Input>
                            </GridItem>
                            <GridItem area="state">
                                <label htmlFor="state">Estado/Província/Região:</label>
                                <Input>
                                    <input type="text" id="state" name="state" value={formData.state} onChange={handleChange} required />
                                </Input>
                            </GridItem>
                            <GridItem area="country">
                                <label htmlFor="country">País:</label>
                                <Input>
                                    <input type="text" id="country" name="country" value={formData.country} onChange={handleChange} required />
                                </Input>
                            </GridItem>
                            <GridItem area="zip">
                                <label htmlFor="zip">CEP:</label>
                                <Input>
                                    <input type="text" id="zip" name="zip" value={formData.zip} onChange={handleChange} />
                                </Input>
                            </GridItem>
                        </FormGrid>
                        <Button type="submit" width={"100%"} height={"4.5rem"}>Enviar</Button>
                    </form>
                </DivConteiner>
            </Modal>
        </>
    );
};

export default LocationAddressInput;
// const { latitude, longitude } = useGeolocation();
// const { isLoaded } = useJsApiLoader({
//     id: 'google-map-script',
//     googleMapsApiKey: API_KEY,
// });
// <Modal handleModal={handleModal} isOpen={isOpen} >
//     {isLoaded ? (
//         <GoogleMap
//             mapContainerStyle={{
//                 height: "100%",
//                 width: "50%"
//             }}
//             zoom={15}
//             center={{ lat: latitude, lng: longitude }}
//             options={{
//                 mapTypeId: 'roadmap',
//                 streetViewControl: false,
//                 fullscreenControl: false,
//                 mapTypeControl: false,
//                 zoomControl: true
//             }}
//         >
//             <Marker position={{ lat: latitude, lng: longitude }} />
//         </GoogleMap>
//     ) : (
//         <LoadMap>Carregando o mapa...</LoadMap>
//     )}
