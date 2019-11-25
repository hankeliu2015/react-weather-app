import React, { Component } from 'react';
import styled from 'styled-components'

const StyleCounter = styled.div`
  /*...*/
`
const Paragraph = styled.p`
  /*...*/
`
const Button = styled.button`
  /*...*/
`

const Thing = styled.button`
color: blue;
::before {
  content: 'this is a simple content';
}

: hover {
  color: red;
}
`

class StyleTest2 extends Component {
  state = { count: 0}

  increment = () => {
    this.setState({
      count: this.state.count +1
    })
  }

  decrement = () => {
    this.setState({
      count: this.state.count -1
    })
  }


  render() {
    return(
      <StyleCounter>
        <Paragraph>{this.state.count}</Paragraph>
        <Button onClick={this.increment}> Increment </Button>
        <Button onClick={this.decrement}> Decrement </Button>
        <Thing>Hello</Thing>
      </StyleCounter>
    )
  }
}

export { StyleTest2 };
