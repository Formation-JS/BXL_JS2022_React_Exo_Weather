
const WeatherDisplay = ({desc, icon, temp, tempFeels, humidity, city, country, updateTime}) => (
    <div>
        <p>{city} ({country}) • {desc}</p>
        <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt="Weather icon" />
        <p>Temp : {temp} °c  (Ressentie : {tempFeels} °c)</p>
        <p>Humidité : {humidity}</p>
        <p>Mise à jour : {updateTime.toLocaleString('fr-be', { style: 'full' })}</p>
    </div>
)

export default WeatherDisplay;