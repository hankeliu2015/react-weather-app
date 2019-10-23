import React, { Component } from 'react';


const CurrentPositon = ({ text }) => (
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

const CurrentPositonHover = {
  ...CurrentPositon,
  border: '5px solid #3f51b5',
  color: '#f44336'
}

export default CurrentPositon;
