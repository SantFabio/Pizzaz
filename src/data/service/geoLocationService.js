
const API_KEY = "AIzaSyCbaI2f4Fpaeq0DpMq9ZG0fVntdW2K5UOw";

const getAddressCoordinates = async (address) => {
    try {
        const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${API_KEY}`);
        const data = await response.json();

        if (data.results && data.results.length > 0) {
            const { lat, lng } = data.results[0].geometry.location;
            return { lat, lng };
        } else {
            throw new Error('No results found for the provided address.');
        }
    } catch (error) {
        throw new Error('Error fetching address coordinates: ' + error.message);
    }
};

const getLocationCoordinates = async (address) => {
    if (address) {
        try {
            // Se um endereço foi fornecido, use a função getAddressCoordinates para obter as coordenadas
            const { lat, lng } = await getAddressCoordinates(address);
            return { latitude: lat, longitude: lng, error: null };
        } catch (error) {
            return { latitude: null, longitude: null, error: error.message };
        }
    } else if (navigator.geolocation) {
        return new Promise((resolve, reject) => {
            // Se nenhum endereço foi fornecido e a geolocalização é suportada, use a localização do dispositivo
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    resolve({ latitude: position.coords.latitude, longitude: position.coords.longitude, error: null });
                },
                (error) => {
                    reject({ latitude: null, longitude: null, error: error.message });
                }
            );
        });
    } else {
        return { latitude: null, longitude: null, error: "Geolocation is not supported by this browser." };
    }
};

export { getLocationCoordinates, API_KEY };
