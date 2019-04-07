import {API_KEY, URL_BASE_WEATHER } from './../constants/weathers';

const getUrlWeatherByCity = city =>{
  return  `${URL_BASE_WEATHER}?q=${city}&appid=${API_KEY}`
}

export default getUrlWeatherByCity;
