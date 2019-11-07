import React, { Component } from 'react';
// import styled from 'styled-components';
import {SubmitButton} from './styleButton.js'
import {ResetButton} from './styleButton.js'
import {Wrapper} from './styleButton.js'
import {CancelButton} from './styleButton.js'

// const Title = styled.h3`
//   font-size: 1.5 em;
//   text-align: center;
//   color: palevioletred;
// `
// const Wrapper = styled.section`
//   padding; 4em;
//   background: papayawhip;
// `

// const Wrapper = styled.div`
//   background: grey;
//   color: white;
// `

// const SubmitButton = styled.button`
//   color: maroon;
//   font-size: 1em;
//   margin: 1em;
//   padding: 0.25em 1em;
//   borderL 2px solid;
//   border-radius: 3px;
//   display: inline-block;
// `

// const ResetButton = styled.button`
//   color: tomato;
//   border-color: tomato;
//   font-size: 1em;
//   margin: 1em;
//   padding: 0.25em 1em;
//   border: 2px solid;
//   border-radius: 3px;
//   display: inline-block;
// `


class CurrentGeo extends Component {

  render() {
    return (
      <Wrapper>
        <h3>Style-Components Test - Current GEOLocaiton data from props</h3>
        <p>latitude: {this.props.latitude}</p>
        <p>longitude: {this.props.longitude}</p>
        <SubmitButton>Submit</SubmitButton>
        <ResetButton>Reset</ResetButton>
        <CancelButton>Cancel</CancelButton>
      </Wrapper>
    )
  }
}

export default CurrentGeo;
