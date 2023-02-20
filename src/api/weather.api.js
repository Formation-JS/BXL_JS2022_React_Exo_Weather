import axios from 'axios';


export const weatherFetcher = ( city) => {

    const params = {
        q: city, units: 'metric', lang: 'fr', appid: process.env.REACT_APP_WEATHER_KEY
    };

    return axios.get('https://api.openweathermap.org/data/2.5/weather', { params }).then(({data}) => ({
        desc: data.weather.map(w => w.description).join(', '),
        icon: data.weather[0].icon,
        temp: data.main.temp,
        tempFeels: data.main.feels_like,
        humidity: data.main.humidity,
        city: data.name,
        country: data.sys.country,
        updateTime: new Date(data.dt * 1000)
    }));
}