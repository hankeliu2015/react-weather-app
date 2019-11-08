import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import fetchJsonp from 'fetch-jsonp';
import Navbar from './Navbar';
import CurrentForecast from './components/currentForecast';
import MinutelyForecast from './components/minutelyForecast';
import HourlyForecast from './components/hourlyForecast';
import DailyForecast from './components/dailyForecast';
// import SimpleMap from './containers/simpleMap';
import CurrentGeo from './components/currentGeo';

const APIURL = `https://api.darksky.net/forecast/${process.env.REACT_APP_DARK_SKY_KEY}/` // will get current log and lat from following function

class App extends Component {
  state = {
    fetchingData: true,
    weatherData: {},
    forecastKey: 'currently',
    lat: '',
    lng: ''
  }

// get current geo lcoation data without fetch darksky
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(position => {
      const {latitude, longitude} = position.coords;
      this.setState({
        lat: latitude,
        lng: longitude
      })
      console.log(position)
    });
  }

  // turn this off to testing geolcation map
  // componentDidMount() {
  //   navigator.geolocation.getCurrentPosition(position => {
  //     const {latitude, longitude} = position.coords
  //     fetchJsonp(`${APIURL}${latitude},${longitude}`)
  //     .then(resp => resp.json())
  //     .then(weatherData => this.setState({
  //       fetchingData: false,
  //       weatherData: weatherData}))
  //   });
  // }

  reqeuestWeatherData = (lat, lng) => {
    // console.log("openCage DMS data:",lat, lng);
    let latitude = this.parseDMS(lat);
    let longitude = this.parseDMS(lng);

    fetchJsonp(`${APIURL}${latitude},${longitude}`)
    .then(resp => resp.json())
    .then(weatherData => {
      this.setState({
        fetchingData: false,
        weatherData: weatherData})
      })
  }

  parseDMS = (dmsData) => {
    var splitedData = dmsData.split(/[^\d\w.]+/);
    var ddData = this.convertDMSToDD(splitedData[0], splitedData[1], splitedData[2], splitedData[3]);
    return ddData;
  }

  convertDMSToDD = (degrees, minutes, seconds, direction) => {
    var dd = parseInt(degrees) + parseInt(minutes)/60 + parseInt(seconds)/(60*60);

    if (direction == "S" || direction == "W") {
        dd = dd * -1;
    } // Don't do anything for N or E
    return dd;
  }

  handleForecastchange = (forecastKey) => {
    this.setState({forecastKey: forecastKey})
  }

  render () {
    const { fetchingData, weatherData, forecastKey } = this.state;

    const center = {lat: this.state.lat, lng: this.state.lng}
    // console.log("Darksky weather data:", weatherData);
    // console.log("State.ForeCastKey Value:",forecastKey);

    return (

      <div className="App">
        <header className="App-header">
          <h3>React Weather App</h3>
        </header>
        <Navbar latitude={this.state.lat} longitude={this.state.lng}/>
        <CurrentGeo latitude={this.state.lat} longitude={this.state.lng}/>

        {/*
          <SimpleMap center={this.center} zoom={11} />
          */}


      {/* turn off following darksky fetch to testing geolocation feature and map*/}
      <div className="App-intro">
          {fetchingData
            ?
            <img src={logo} className="App-logo" alt="logo" />
            :
            <div>
              <Navbar changeForecast ={this.handleForecastchange} reqeuestWeatherData={this.reqeuestWeatherData} />

              {/*
                <CurrentForecast forecast={forecastKey === null? weatherData.currently : weatherData[forecastKey]} />
                */}

            {forecastKey === 'currently' && <CurrentForecast forecast={weatherData[forecastKey]} timeZone={weatherData.timezone} /> }

            {forecastKey === 'minutely' && <MinutelyForecast forecastData={weatherData[forecastKey].data} /> }

            {forecastKey === 'hourly' && <HourlyForecast forecastData={weatherData[forecastKey].data} /> }

            {forecastKey === 'daily' && <DailyForecast forecastData={weatherData[forecastKey].data} /> }
            </div>
          }
        </div>
      </div>
    );
  }
}

export default App;
