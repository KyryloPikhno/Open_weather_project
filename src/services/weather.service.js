import {axiosService} from "./axsios.service";

import {url} from "../configs";

const weatherService = {
    getWeather: (q, appid, lat, lon) => axiosService.get(url.weather,
        {
            params: {
                q,
                appid,
                units: 'metric',
                lat,
                lon
            }
        }),
};

export {weatherService};