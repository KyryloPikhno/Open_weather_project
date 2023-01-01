import {useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";

import {weatherService} from "../../services";
import css from './WeatherDetails.module.css'
import {Header} from "../Header/Header";


const WeatherDetails = () => {
    const [query] = useSearchParams();

    const [data, setData] = useState(null);

    useEffect(() => {
        try {
            weatherService.getWeather(query.get('q'))
                .then((response) => {
                    setData(response.data)
                    console.log(response.data)
                })
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
                <img src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`} alt="weather icon"/>
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
        </div>
    );
};

export {WeatherDetails}