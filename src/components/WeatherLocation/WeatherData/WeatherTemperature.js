import React, { Component } from 'react';
import WeatherIcons from 'react-weathericons';

const icons = {
  sunny: "day-sunny",
  fog: "day-fog"
}

const getWeatherIcon = weatherState => {
  let getIcon = icons[weatherState];
  const icon = (getIcon ? getIcon : icons.sunny )
  return <WeatherIcons name={icon} size="2x" />
}

const WeatherTemperature = ({temperature, weatherState}) => (
    <div>
      {
        getWeatherIcon(weatherState)
      }
      <span>
        {`${temperature} Cº`}
      </span>
    </div>
);

export default WeatherTemperature;
