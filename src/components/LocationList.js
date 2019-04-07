import React from 'react';
import WeatherLocation from './WeatherLocation';

const LocationList = () => {
  return <div>
            <WeatherLocation city="Monterrey, mx" />
            <WeatherLocation city="San Luis Potosi, mx" />
            <WeatherLocation city="Veracruz, mx" />
            <WeatherLocation city="Hidalgo, mx" />
         </div>
}

export default LocationList;
