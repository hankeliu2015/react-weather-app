import React, { Component } from 'react';
import styled from 'styled-components'

// const Title = styled.h3`
//   font-size: 1.5 em;
//   text-align: center;
//   color: palevioletred;
// `
// const Wrapper = styled.section`
//   padding; 4em;
//   background: papayawhip;
// `

const Wrapper = styled.div`
  background: grey;
  color: white;
`

class CurrentGeo extends Component {

  render() {
    return (
      <Wrapper>
        <h3>Current GEOLocaiton data from props</h3>
        <p>latitude: {this.props.latitude}</p>
        <p>longitude: {this.props.longitude}</p>
      </Wrapper>
    )
  }
}

export default CurrentGeo;
