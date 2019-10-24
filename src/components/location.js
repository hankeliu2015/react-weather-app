import React, { Component } from 'react';

// const CurrentPosition = ({ text }) => (
//     <div style={{
//       color: 'yellow',
//       background: 'blue',
//       padding: '15px 10px',
//       display: 'inline-flex',
//       textAlign: 'center',
//       alignItems: 'center',
//       justifyContent: 'center',
//       borderRadius: '100%',
//       border: '5px solid #f44336',
//       transform: 'translate(-50%, -50%)',
//
//     }}>
//     {text}
//     </div>
// );


const locationHoverStyle = {
      background: 'white',
      padding: '15px 10px',
      display: 'inline-flex',
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '100%',
      transform: 'translate(-50%, -50%)',

      border: '5px solid #3f51b5',
      color: '#f44336'
    }

const locationStyle = {

      color: 'blue',
      background: 'white',
      padding: '15px 10px',
      display: 'inline-flex',
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '100%',
      border: '5px solid #f44336',
      transform: 'translate(-50%, -50%)',

    };

class Location extends Component {

  render() {
    const currentStyle = this.props.$hover ? locationHoverStyle : locationStyle
  return (
    <div className="tooltip" style={currentStyle}>
      {this.props.locationName}
          <span className="tooltiptext">
          Сlick me
          </span>
    </div>
  )
}}

export { Location };
// export default CurrentPositon;
