import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { weatherFetcher } from '../../api/weather.api';
import LoadingScreen from '../loading-screen/loading-screen';
import WeatherDisplay from './weather-display';
import WeatherError from './weather-error';


const WeatherAjax = ({city}) => {

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setLoading] = useState(true);

    // https://api.openweathermap.org/data/2.5/weather?q=bruxelles,ca&units=metric&lang=fr&appid=API_KEY
    useEffect(() => {
        // Requete Ajax
        weatherFetcher(city).then(result => {
            setData(result)
        }).catch(response => {
            setError(response.message);
        }).finally(() => {
            setLoading(false);
        });

        // Cleanup avant la prochaine requete Ajax
        return () => {
            setData(null);
            setError(null);
            setLoading(true);
        };
    }, [city]);

    return isLoading ? (
        <LoadingScreen />
    ) : data ? (
        <WeatherDisplay {...data} />
    ) : (
        <WeatherError message={error} />
    )
}

WeatherAjax.propTypes = {
    city: PropTypes.string.isRequired
};

export default WeatherAjax;