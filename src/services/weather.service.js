import {axiosService} from "./axsios.service";
import {url} from "../configs";


const weatherService = {
    getWeather: (q) => axiosService.get(url.weather,
        {
            params: {
                q,
                appid: process.env.API_KEY,
                units: 'metric'
            }
        })
};

export {weatherService};