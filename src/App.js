import React, { Component } from 'react';
import LocationList from './components/LocationList';
import './App.css';

const cities = [
  'Monterrey, mx',
  'Washington, us',
  'Bogota, col',
  'Madrid, es',
  'Lima, pe'
]
class App extends Component {
  render() {
    return (
      <div className="App">
        <LocationList cities={cities}/>
      </div>
    );
  }
}

export default App;
