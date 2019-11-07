import React, {Component} from 'react';

class Navbar extends Component  {
  state = {
    location: '',
    lng: '',
    lat: '',
    city: '',
    state: '',
    country: '',
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const PLACENAME = this.state.location;
    fetch(`https://api.opencagedata.com/geocode/v1/json?q=${PLACENAME}&key=${process.env.REACT_APP_GEO_CODING}`)
    .then(resp => resp.json())
    .then(location => {
      this.setState({
        lat: location.results[0].annotations.DMS.lat,
        lng: location.results[0].annotations.DMS.lng,
        city: location.results[0].components.city,
        state: location.results[0].components.state,
        country: location.results[0].components.country
      })
      this.props.reqeuestWeatherData(this.state.lat, this.state.lng);
      // debugger
    })}

  checkGeoLocation = () => {
    // e.preventDefault();
    navigator.geolocation.getCurrentPosition((pos, error) =>  {

      let crd = pos.coords;
      console.log('Your current position is:');
      console.log(`Latitude : ${crd.latitude}`);
      console.log(`Longitude: ${crd.longitude}`);
      console.log(`More or less ${crd.accuracy} meters.`);
      console.log(`Error:`, error);

    })}

  render () {
    return (
      <div>
        <button className={"nav-button"} onClick={()=> this.props.changeForecast('currently')}>Currently</button>
        <button className={"nav-button"} onClick={()=> this.props.changeForecast('minutely')} >Minutely</button>
        <button className="nav-button" onClick={()=> this.props.changeForecast('hourly')} >Hourly</button>
        <button className="nav-button" onClick={()=> this.props.changeForecast('daily')} >Daily</button>

        <form onSubmit={this.handleSubmit}>
          <input type="text" list='location' name="location" value={this.state.location} onChange={this.handleChange}/>
          <datalist id="locaton">
            <option value="New York" />
            <option value="DC" />
            <option value="Boston" />
            <option value="Chicago" />
            <option value="Denvor" />
          </datalist>
          <input type="submit" value="Submit Location" />
        </form>
          {this.state.city ? <h4>Location: {this.state.city},  {this.state.state}, {this.state.country}</h4>: null}

        <h3>Current GEOLocaiton data from props</h3>
          <p>latitude: {this.props.latitude}</p>
          <p>longitude: {this.props.longitude}</p>

        <h3>GEOLocaiton Data from web api</h3>
          <button className={"nav-button"} onClick={()=> this.checkGeoLocation()}>Check GEO Location</button>
      </div>
    )}}

export default Navbar;

{/*

  onSubmit will invoke handleSubmit(), launch fetch to openCage pass in location as argument. return the lan/lat.
  another callback function in app.js, take the lan/lat argment, fetch dark sky API.
  state.weatherData in App.js will be updated, pass into props to child components.


  */}
