import { useCallback, useState } from "react";
import SearchBar from "../../components/search-bar/search-bar";
import WeatherAjax1 from "../../components/weather/weather-ajax-v1";
import WeatherAjax2 from "../../components/weather/weather-ajax-v2";

const WeatherApp = () => {

    const [city, setCity] = useState(null);

    // Utilisation du hook "useCallback" (Mémorisation de la fonction)
    const handleSearch = useCallback((query) => {
        setCity(query);
    });

    //Render
    return (
        <>
            <SearchBar
                label='Ville'
                placeholder='Bruxelles'
                submitText='Rechercher'
                onSearch={handleSearch} />

            {city && (
                <>
                    <WeatherAjax1 city={city} />
                    <hr />
                    <WeatherAjax2 city={city} />
                </>
            )}
        </>
    );
};

export default WeatherApp;