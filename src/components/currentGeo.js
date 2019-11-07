import React, { Component } from 'react';

const Title = styled.h3`
font-size: 1.5 em;
text-align: center;
color: palevioletred;
`;
const Wrapper = styled.section`
padding; 4em;
background: papayawhip;
`;

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
