

import location from "../../../assets/img/location.svg";
import { useState } from "react";
import {
    ImgLocationButton,
    LoadMap,
} from "./LocationAddressInput.styled"
import Modal from "../Modal/Modal";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import useGeolocation from "../../../data/hooks/useGeolocation";

const API_KEY = "AIzaSyCbaI2f4Fpaeq0DpMq9ZG0fVntdW2K5UOw";

const LocationAddressInput = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { latitude, longitude, error } = useGeolocation();
    console.log(latitude, longitude, error);
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: API_KEY,
    });
    const handleModal = (event) => {
        if (event.target.id === "modal") {
            setIsOpen(false);
        } else {
            setIsOpen(true);
        }
    };

    return (
        <>
            <ImgLocationButton src={location} onClick={handleModal}></ImgLocationButton>
            <Modal handleModal={handleModal} isOpen={isOpen} >
                {isLoaded ? <GoogleMap
                    mapContainerStyle={{
                        height: "100%",
                        width: "50%"
                    }}
                    zoom={16}
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
                    : <LoadMap>Carregando o mapa...</LoadMap>
                }
            </Modal>
        </>
    )
}
export default LocationAddressInput;