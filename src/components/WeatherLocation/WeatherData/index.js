import React from 'react';
import WeatherTemperature from './WeatherTemperature';
import WeatherExtraInfo from './WeatherExtraInfo';
import { SUNNY, CLOUD } from './../../../constants/weathers';
import './style.css';

const WeatherData = () => (
    <div className="wetherDataCont">
        <WeatherTemperature temperature={31} weatherState={SUNNY} />
        <WeatherExtraInfo humidity={80} wind={"10 m/s"} />
    </div>
);
export default WeatherData;
