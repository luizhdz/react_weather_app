import React, {Component} from 'react';
import WeatherData from './WeatherData';
import PropTypes from 'prop-types';
import Location from './Location';
import './style.css';
import transformWeather from './../../services/transformWeather'
import getUrlWeatherByCity from './../../services/getUrlWeatherByCity'
import CircularProgress from '@material-ui/core/CircularProgress'
class WeatherLocation extends Component {
  constructor(props){
    super(props);
    const {city} = props;
    this.state = {
      city,
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
    const api_weather = getUrlWeatherByCity(this.state.city);
    fetch(api_weather)
    .then(resp =>{
      return resp.json();
    })
    .then(data => {
      const newData = transformWeather(data);
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
WeatherLocation.propTypes = {
  city : PropTypes.string.isRequired
}
export default WeatherLocation;
