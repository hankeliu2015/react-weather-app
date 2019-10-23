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

const CurrentPositionHover = () => (

  <div style={{

      ...CurrentPosition,
      border: '5px solid #3f51b5',
      color: '#f44336'

    }}>

  </div>

)


// export default CurrentPositon;
export { CurrentPosition, CurrentPositionHover };
