import "./current-weather.scss";
import SVG from "../svg/SVG";
import changeBackground from "../change-background/changeBackground";
import {BsSpeedometer, BsSunriseFill, BsSunsetFill} from 'react-icons/bs';
import {WiHumidity, WiStrongWind} from 'react-icons/wi';
import {RiFahrenheitFill} from 'react-icons/ri'

const CurrentWeather = ({data}) => {
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

    const getDate = (date) => {
        date = new Date(date);
        return (`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
    }

    const celciusToFahrenheit = (c) => {
        return Math.round(c * 1.8 + 32);
    }

    changeBackground(data.weather[0].id);

    return (
        <div className="weather">
            <div className="weather__temperature">
                <div className="city-name">
                    <p>{data.city}</p>
                    <p className="date">{date}</p>
                </div>
                <div className="temp">
                    <div>
                        <SVG id={data.weather[0].id}/>
                        <p>{data.weather[0].description}</p>
                    </div>
                    <p>{Math.round(data.main.temp)}°C</p>
                </div>
                <div className="additionals">
                    <p>feels like {Math.round(data.main.feels_like)}°C</p>
                    <div className="min-max">
                        <p>min {Math.round(data.main.temp_min)}°C</p>
                        <p>max {Math.round(data.main.temp_max)}°C</p>
                    </div>
                </div>
            </div>
            <div className="weather__everything-else">
                <div className="pressure">
                    <BsSpeedometer/>
                    <p>{data.main.pressure}</p>
                    <p>pressure</p>
                </div>
                <div className="humidity">
                    <WiHumidity/>
                    <p>{data.main.humidity}%</p>
                    <p>humidity</p>
                </div>
                <div className="wind-speed">
                    <WiStrongWind/>
                    <p>{data.wind.speed} m/s</p>
                    <p>wind speed</p>
                </div>
                <div className="sunrise">
                    <BsSunriseFill/>
                    <p>{getDate(data.sys.sunrise)}</p>
                    <p>sunrise</p>
                </div>
                <div className="sunset">
                    <BsSunsetFill/>
                    <p>{getDate(data.sys.sunset)}</p>
                    <p>sunset</p>
                </div>
                <div className="fehrenheit">
                    <RiFahrenheitFill/>
                    <p>{celciusToFahrenheit(data.main.temp)}°F</p>
                    <p>fahrenheit</p>
                </div>
            </div>
        </div>
    );
}

export default CurrentWeather;