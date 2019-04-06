import React, { Component } from 'react';
import WeatherData from './WeatherData';
import Location from './Location';

const WeatherLocation = () => {
  return (
    <div>
    <Location city={"Monterrey"}></Location>
    <WeatherData />
    </div>
  )
}

export default WeatherLocation;
