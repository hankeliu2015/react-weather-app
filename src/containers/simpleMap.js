import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
// import { CurrentPosition } from '../components/currentPosition.js'
import { Location } from '../components/location'

// const AnyReactComponent = ({ text }) => (
//   <div style={{
//     color: 'white',
//     background: 'grey',
//     padding: '15px 10px',
//     display: 'inline-flex',
//     textAlign: 'center',
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderRadius: '100%',
//     transform: 'translate(-50%, -50%)',
//
//   }}>
//     {text}
//   </div>
// );

class SimpleMap extends Component {
  static defaultProps = {
    center: {lat: 40.78, lng: -73.94},
    zoom: 11
  };


  render() {

    const createMapOptions= (maps) => {
      return {
        panControl: false,
        mapTypeControl: false,
        scrollwheel: false,
        styles: [{ stylers: [{ 'saturation': -100 }, { 'gamma': 0.8 }, { 'lightness': 4 }, { 'visibility': 'on' }] }]
      }
    }

    return (
      <div style={{ height: '500px', width: '100%' }}>
        <h4>Google Map React - my current location</h4>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP_KEY }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          layerTypes={['TransitLayer']}
          options={createMapOptions}


          >
          {/* turn off following component to test child component*/}
          {/*
            <AnyReactComponent
            lat={40.7821682}
            lng={-73.9486154}
            text={'You are here'}
            />
            */}

          {/*
            <CurrentPosition
            lat={40.7821682}
            lng={-73.9486154}
            text={'You are here'}
            />
            */}

          <Location
            locationName={'City Hall'}
            lat={40.712774}
            lng={-74.006059}
            />
          <Location
            locationName={'You are here'}
            lat={40.7821682}
            lng={-73.9486154}
            />

        </GoogleMapReact>

      </div>

    );
  }
}

export default SimpleMap;
