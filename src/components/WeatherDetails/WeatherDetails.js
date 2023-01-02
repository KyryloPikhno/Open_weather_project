import {useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";

import {weatherService} from "../../services";
import {Header} from "../Header/Header";
import {Map} from "../Map/Map";
import css from './WeatherDetails.module.css'


const WeatherDetails = () => {
    const [query] = useSearchParams({q: 'Mariupol'});

    const [data, setData] = useState(null);

    const [longitude, setLongitude] = useState(-0.112869)

    const [latitude, setLatitude] = useState(51.504)

    useEffect(() => {
        try {
            if (query.get('lat') && query.get('lon') && query.get('q') === '') {
                weatherService.getWeather('', query.get('lat'), query.get('lon'), process.env.REACT_APP_API_KEY)
                    .then((response) => {
                        setData(response.data)

                    });
            }
            if (!query.get('lat') && !query.get('lon') && query.get('q')) {
                weatherService.getWeather(query.get('q'), '', '', process.env.REACT_APP_API_KEY)
                    .then((response) => {
                        setData(response.data)
                        console.log(response.data.coord);

                        setLongitude(response.data.coord.lon)
                        setLatitude(response.data.coord.lat)

                    })
            }
        } catch (e) {
            console.log(e)
        }
    }, [query]);


    return (
        <div className={css.app}>
            {
                data &&
                <div className={css.weather}>
                    <div>
                        <Header/>
                    </div>
                    <div className={css.weather_display}>
                        <h3 className={css.weather_location}>Weather in {data.name && data.name}</h3>

                        <div>
                            <h1 className={css.weather_degrees}>{data.main.temp.toFixed()} °C</h1>
                        </div>

                        <div className={css.weather_description}>
                            <div>
                                <div className={css.weather_description_head}>
                <span className={css.weather_icon}>
                <img src={`https://openweathermap.org/img/w/${data.weather[0].icon}.png`} alt="weather icon"/>
                </span>
                                    <h3>{data.weather[0].description}</h3>
                                </div>
                                <div className={css.box}>
                                    <div>
                                        <h3>Humidity: {data.main.humidity}%</h3>
                                        <h3>Wind speed: {data.wind.speed.toFixed()} m/s</h3>
                                    </div>
                                    <div className={css.weather_country}>
                                        <h3>{data.sys.country}</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
            <div>
                <Map longitude={longitude} setLongitude={setLongitude} latitude={latitude} setLatitude={setLatitude}/>
            </div>
        </div>
    );
};

export {WeatherDetails}