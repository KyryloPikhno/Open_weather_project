import { useRef, useEffect, useState } from 'react'
import * as tt from '@tomtom-international/web-sdk-maps'
import '@tomtom-international/web-sdk-maps/dist/maps.css'
import {useSearchParams} from "react-router-dom";

import css from './Map.module.css'


const Map = () => {
    const mapElement = useRef();

    const [location, setLocation] = useSearchParams();

    const [map, setMap] = useState({});

    const [longitude, setLongitude] = useState(-0.112869)

    const [latitude, setLatitude] = useState(51.504)

    useEffect(() => {
        console.log(longitude, latitude);
        let map = tt.map({
            key: process.env.REACT_APP_TOM_TOM_API_KEY,
            container: mapElement.current,
            // stylesVisibility: {
            //     trafficIncidents: true,
            //     trafficFlow: true,
            // },
            center: [longitude, latitude],
            zoom: 5,
        })
        setMap(map)

        const addMarker = () => {
            new tt.Marker({
                draggable: true,
            })
                .setLngLat([longitude, latitude])
                .addTo(map)
        }
        addMarker()

        map.on('click', (e) => {
            setLatitude(e.lngLat.lat)
            setLongitude(e.lngLat.lng)

            setLocation({
                lat:e.lngLat.lat,
                lon:e.lngLat.lng
            })
        })

        return () => map.remove()

    }, [longitude, latitude])

    return (
        <div>
            {map && (
                <div className={css.container}>
                    <div ref={mapElement} className={css.map}/>
                </div>
            )}
        </div>
    )
};

export {Map};