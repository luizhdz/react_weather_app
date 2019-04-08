import React, { Component } from 'react';
import {Paper, AppBar, Typography, Toolbar} from '@material-ui/core';
import LocationList from './components/LocationList';
import {Grid, Col, Row} from 'react-flexbox-grid';
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
      <Grid className="App">
        <Row>
          <AppBar position='sticky'>
            <Toolbar>
              <Typography variant='title' color='inherit'>
                Weather App
              </Typography>
            </Toolbar>
          </AppBar>

        </Row>
        <Row>
          <Col xs={12} md={6}>
            <LocationList cities={cities}/>
          </Col>
          <Col xs={12} md={6}>
            <Paper elevation={4}>
              <div className="details"></div>
            </Paper>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
