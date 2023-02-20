import PropTypes from 'prop-types';
import LoadingScreen from '../loading-screen/loading-screen';
import useSWR from 'swr';
import { weatherFetcher } from '../../api/weather.api';
import WeatherDisplay from './weather-display';
import WeatherError from './weather-error';


const WeatherAjax = ({city}) => {

    // https://api.openweathermap.org/data/2.5/weather?q=bruxelles,ca&units=metric&lang=fr&appid=API_KEY
    const { isLoading, data, error } = useSWR(city, weatherFetcher);

    
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