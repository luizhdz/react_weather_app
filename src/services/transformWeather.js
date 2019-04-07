import { SUNNY } from './../constants/weathers';
import Convert from 'convert-units';

const getTemp = kelvin => {
  return Number(Convert(kelvin).from("K").to("C").toFixed(2));
}

const getWeatherState = weatherData => {
  return SUNNY;
}

const transformWeather = weatherData => {
    const {humidity, temp} = weatherData.main;
    const {speed} = weatherData.wind;
    const weatherState = getWeatherState(weatherData);

    const data = {
      temperature: getTemp(temp),
      weatherState,
      humidity,
      wind: `${speed} m/s`,
    }

    return data;
}

export default transformWeather;
