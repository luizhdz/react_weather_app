import React from 'react';
import WeatherIcons from 'react-weathericons';
import { SIZE_ICON, SUN, CLOUD, RAIN, SNOW, THUNDER, DRIZZLE } from './../../../constants/weathers';

const icons = {
  [SUN]: "day-sunny",
  [CLOUD]: "cloud",
  [RAIN]: "day-rain",
  [SNOW]: "day-snow",
  [THUNDER]: "thunderstorm",
  [DRIZZLE]: "hail",
}

const getWeatherIcon = weatherState => {
  let getIcon = icons[weatherState];
  const icon = (getIcon ? getIcon : icons.sunny )
  return <WeatherIcons className="wIcon" name={icon} size={SIZE_ICON} />
}

const WeatherTemperature = ({temperature, weatherState}) => (
    <div className="weatherTemperatureCont">
      {
        getWeatherIcon(weatherState)
      }
      <span className="temperature">
        {`${temperature}`}
      </span>
      <span className="temperatureType">
        Cº
      </span>
    </div>
);

export default WeatherTemperature;
