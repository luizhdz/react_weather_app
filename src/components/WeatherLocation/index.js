import React, {Component} from 'react';
import WeatherData from './WeatherData';
import Location from './Location';
import './style.css';
import { SUNNY, API_WEATHER } from './../../constants/weathers';

const data = {
  temperature: 15,
  weatherState: SUNNY,
  humidity: 30,
  wind: "10 m/s"
}

class WeatherLocation extends Component {
  constructor(){
    super();
    this.state = {
      city: "Mexico",
      data: data
    }
  }
  getWeatherState = weatherData => {
    return SUNNY;
  }
  
  getData = weatherData => {
      const {humidity, temp} = weatherData.main;
      const {speed} = weatherData.wind;
      const weatherState = this.getWeatherState(weatherData);

      const data = {
        temperature: temp,
        weatherState,
        humidity,
        wind: `${speed} m/s`,
      }

      return data;
  }

  handleUpdateClick = () => {
    fetch(API_WEATHER)
    .then(resp =>{
      return resp.json();
    })
    .then(data => {
      const newData = this.getData(data);
      console.log(newData);
      this.setState({
        data : newData
      });
    })
    .catch(error =>{
      console.log(error);
    });
  }
  render(){
    const {city, data} = this.state
    return (
      <div className="weatherLocationCont">
        <Location city={city}></Location>
        <WeatherData data={data} />
        <button onClick={this.handleUpdateClick} >Actualizar</button>
      </div>
    )
  }
}

export default WeatherLocation;
