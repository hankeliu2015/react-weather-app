import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import fetchJsonp from 'fetch-jsonp'
import CurrentForecast from './components/currentForecast'

const APIURL = `https://api.darksky.net/forecast/${process.env.REACT_APP_DARK_SKY_KEY}/` // will get current log and lat from following function

class App extends Component {
  state = {
    fetchingData: true,
    weatherData: {}
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(position => {
      const {latitude, longitude} = position.coords
      console.log(latitude)
      console.log(longitude)
      console.log(process.env.key)
      fetchJsonp(`${APIURL}${latitude},${longitude}`)
      .then(resp => resp.json())
      .then(weatherData => this.setState({
        fetchingData: false,
        weatherData: weatherData}))
    });
  }


  render () {
    const { fetchingData, weatherData } = this.state;
    console.log(fetchingData);
    console.log("this is weather data:", weatherData);

    return (
      <div className="App">
        <header className="App-header">
          <h3>React Weather App</h3>
        </header>

        {fetchingData ?
          <img src={logo} className="App-logo" alt="logo" /> :

          <CurrentForecast props={this.state.weatherData} />
        }

      </div>
    );
  }
}

export default App;

{/*
<img src={logo} className="App-logo" alt="logo" />

  */}
