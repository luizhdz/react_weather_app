import React from 'react';
import WeatherData from './WeatherData';
import Location from './Location';
import './style.css';
const WeatherLocation = () => {
  return (
    <div className="weatherLocationCont">
    <Location city={"Monterrey"}></Location>
    <WeatherData />
    </div>
  )
}

export default WeatherLocation;
