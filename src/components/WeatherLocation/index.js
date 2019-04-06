import React from 'react';
import WeatherData from './WeatherData';
import Location from './Location';
import './style.css';
import { SUNNY, CLOUD } from './../../constants/weathers';

const data = {
  temperature: 15,
  weatherState: SUNNY,
  humidity: 30,
  wind: "10 m/s"
}

const WeatherLocation = () => {
  return (
    <div className="weatherLocationCont">
    <Location city={"Monterrey"}></Location>
    <WeatherData data={data} />
    </div>
  )
}

export default WeatherLocation;
