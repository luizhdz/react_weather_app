import React, {Component} from 'react';
import WeatherData from './WeatherData';
import Location from './Location';
import './style.css';
import { SUNNY, CLOUD, WINDY } from './../../constants/weathers';

const data = {
  temperature: 15,
  weatherState: SUNNY,
  humidity: 30,
  wind: "10 m/s"
}

const data2 = {
  temperature: 32,
  weatherState: WINDY,
  humidity: 60,
  wind: "43 m/s"
}
class WeatherLocation extends Component {
  constructor(){
    super();
    this.state = {
      city: "Mexico",
      data: data
    }
  }
  handleUpdateClick = () => {
    console.log("Actualizado !")
    this.setState( {
      city: "San Luis P.",
      data: data2
    })
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
