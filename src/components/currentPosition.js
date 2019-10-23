import React, { Component } from 'react';

const CurrentPosition = ({ text }) => (
    <div style={{
      color: 'yellow',
      background: 'blue',
      padding: '15px 10px',
      display: 'inline-flex',
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '100%',
      border: '5px solid #f44336',
      transform: 'translate(-50%, -50%)',

    }}>
    {text}
    </div>
);

const CurrentPositionHover = ({ text }) => (
  <div style={{
      background: 'blue',
      padding: '15px 10px',
      display: 'inline-flex',
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '100%',
      transform: 'translate(-50%, -50%)',

      border: '5px solid #3f51b5',
      color: '#f44336'
    }}>
    {text}
  </div>
)

const LocaitonHoverStyle = {
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

const LocationStyle = {

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

class CurrentLocation extends Component {

  render() {
    const currentStyle = this.props.$hover ? LocaitonHoverStyle : LocationStyle
  return (
    <div style={currentStyle}>{this.props.text}</div>
  )
}}

export { CurrentPosition, CurrentPositionHover, CurrentLocation };
// export default CurrentPositon;
