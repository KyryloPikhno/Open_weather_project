import {axiosService} from "./axsios.service";
import {apiKey, url} from "../configs";


const weatherService = {
    getWeather: (q) => axiosService.get(url.weather,
        {
            params: {
                q,
                appid: apiKey.weather,
                units: 'metric'
            }
        })
};

export {weatherService};