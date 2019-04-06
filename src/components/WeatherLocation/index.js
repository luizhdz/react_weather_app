import React, { Component } from 'react';
import WeatherData from './WeatherData';
import Location from './Location';

const WeatherLocation = () => {
  return (
    <div>
    <Location />
    <WeatherData />
    </div>
  )
}

export default WeatherLocation;
