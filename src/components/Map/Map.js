import {useJsApiLoader, GoogleMap} from '@react-google-maps/api';

import {apiKey} from "../../configs";

const center = {lat: 48.8584, lng: 2.2945};

const Map = () => {
    const {isLoaded} = useJsApiLoader({
        googleMapsApiKey: apiKey.googleMap,
    });

    if (!isLoaded) {
        // console.log('load')
    }


    return (
        <div>
            hi
            <GoogleMap key={apiKey.googleMap} center={center} zoom={15} mapContainerStyle={{width: '100%', height: '100%'}} options={{
                zoomControl: false,
                streetViewControl: false,
                fullscreenControl: false
            }}>

            </GoogleMap>
        </div>
    );
};

export {Map};