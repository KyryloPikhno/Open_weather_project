const baseURL = 'https://api.openweathermap.org/data/2.5';

const url = {
    weather: '/weather'
};

const key = {
    weather: process.env.API_KEY,
    map: process.env.MAP_KEY
};

export {baseURL, url, key};