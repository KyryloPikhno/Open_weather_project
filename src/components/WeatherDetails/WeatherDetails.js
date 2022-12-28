import {useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";

import {weatherService} from "../../services";


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
        <div>
            {
                data &&
                <div>
                    <div>
                        <div>
                            <p>{data.name && data.name}</p>
                        </div>
                        <div>
                            {data.main && <h1>{data.main.temp.toFixed()}°F</h1>}
                        </div>
                        <div>
                            {data.weather && <p>{data.weather[0].main}</p>}
                        </div>
                    </div>
                    <div className="bottom">
                        <div className="feels">
                            {data.main && <p className='bold'>{data.main.feels_like.toFixed()}°F</p>}
                            <p>Feels Like</p>
                        </div>
                        <div className="humidity">
                            {data.main.humidity && <p className='bold'>{data.main.humidity}%</p>}
                            <p>Humidity</p>
                        </div>
                        <div className="wind">
                            {data.wind.speed && <p className='bold'>{data.wind.speed.toFixed()} MPH</p>}
                            <p>Wind Speed</p>
                        </div>
                    </div>

                </div>
            }
        </div>
    );
};

export {WeatherDetails}