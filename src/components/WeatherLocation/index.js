import React, {Component} from 'react';
import WeatherData from './WeatherData';
import PropTypes from 'prop-types';
import Location from './Location';
import './style.css';
import {CircularProgress} from '@material-ui/core'
import transformWeather from './../../services/transformWeather'
import getUrlWeatherByCity from './../../services/getUrlWeatherByCity'

class WeatherLocation extends Component {
  constructor(props){
    super(props);
    const {city} = props;
    this.state = {
      city,
      data: null
    }
  }
  componentDidMount() {
    this.handleUpdateClick();
  }
  componentDidUpdate(prevProps, prevState) {
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
    const {city, data} = this.state
    return (

        <div className="weatherLocationCont">
          <Location city={city}></Location>
          {data ? <WeatherData data={data} /> : <CircularProgress size={50} />}
        </div>

    )
  }
}
WeatherLocation.propTypes = {
  city : PropTypes.string.isRequired
}
export default WeatherLocation;
