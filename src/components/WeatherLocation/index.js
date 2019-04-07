import React, {Component} from 'react';
import WeatherData from './WeatherData';
import Location from './Location';
import './style.css';
import { SUNNY, API_WEATHER } from './../../constants/weathers';
import Convert from 'convert-units';
import transformWeather from './../../services/transformWeather'
import CircularProgress from '@material-ui/core/CircularProgress'
class WeatherLocation extends Component {
  constructor(){
    super();
    this.state = {
      city: "Mexico",
      data: null
    }
    console.log("Constructor");
  }
  componentDidMount() {
    console.log("componentDidMount");
    this.handleUpdateClick();
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate");
  }


  handleUpdateClick = () => {
    fetch(API_WEATHER)
    .then(resp =>{
      return resp.json();
    })
    .then(data => {
      const newData = transformWeather(data);
      // debugger;
      this.setState({ data : newData });
    })
    .catch(error =>{
      console.log(error);
    });
  }

  render(){
    console.log("RENDER");
    const {city, data} = this.state
    return (
      <div className="weatherLocationCont">
        <Location city={city}></Location>
        {data ? <WeatherData data={data} /> : <CircularProgress size={50} />}
        <button onClick={this.handleUpdateClick} >Actualizar</button>
      </div>
    )
  }
}

export default WeatherLocation;
