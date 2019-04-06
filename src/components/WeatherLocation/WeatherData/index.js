import React, { Component } from 'react';
import WeatherTemperature from './WeatherTemperature';
import WeatherExtraInfo from './WeatherExtraInfo';

const WeatherData = () => (
    <div>
        <WeatherTemperature temperature={31} weatherState="rain" />
        <WeatherExtraInfo humidity={80} wind={"10 m/s"} />
    </div>
);
export default WeatherData;
