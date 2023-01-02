import { useRef, useEffect, useState } from 'react'
import * as tt from '@tomtom-international/web-sdk-maps'
import '@tomtom-international/web-sdk-maps/dist/maps.css'
import {useSearchParams} from "react-router-dom";

import css from './Map.module.css'


const Map = ({longitude, setLongitude, latitude, setLatitude}) => {
    const mapElement = useRef();

    const [query, setQuery] = useSearchParams();

    const [map, setMap] = useState({});

    useEffect(() => {
        console.log(longitude, latitude);
        let map = tt.map({
            key: process.env.REACT_APP_TOM_TOM_API_KEY,
            container: mapElement.current,
            center: [longitude, latitude],
            zoom: 6,
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

            setQuery({
                q: '',
                lat: e.lngLat.lat.toString(),
                lon: e.lngLat.lng.toString()
            });
        })

        return () => map.remove()

    }, [setQuery, query, longitude, setLongitude, latitude, setLatitude]);

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
