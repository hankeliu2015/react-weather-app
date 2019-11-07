import React, { Component } from 'react';

class CurrentGeo extends Component {
  render() {
    return (
      <div>
        <h3>Current GEOLocaiton data from props</h3>
        <p>latitude: {this.props.latitude}</p>
        <p>longitude: {this.props.longitude}</p>
      </div>
    )
  }
}

export default CurrentGeo;
