import {axiosService} from "./axsios.service";

import {url} from "../configs";

const weatherService = {
    getWeather: (q, lat, lon, appid) => axiosService.get(url.weather,
        {
            params: {
                q,
                lat,
                lon,
                units: 'metric',
                appid,
            }
        })
};

export {weatherService};