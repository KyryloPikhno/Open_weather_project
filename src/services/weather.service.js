import {axiosService} from "./axsios.service";

import {url} from "../configs";

const weatherService = {
    getWeather: (q ) => axiosService.get(url.weather,
        {
            params: {
                q,
                appid: 'c6531e371549842db5f60c68c8b2f02f',
                units: 'metric'
            }
        })
};

export {weatherService};