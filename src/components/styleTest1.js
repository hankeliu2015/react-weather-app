import React, { Component } from 'react';
import styled from 'styled-components';
import { Wrapper, SubmitButton, ResetButton, CancelButton, Title} from '../components/styleButton'

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

class StyleTest1 extends Component {
  render() {
    return (

      <Wrapper>
        <Title>Style-Components Container</Title>

        <SubmitButton>Submit</SubmitButton>
        <ResetButton>Reset</ResetButton>
        <CancelButton>Cancel</CancelButton>

        <Button>Normal</Button>
        <Button primary>Primary</Button>
      </Wrapper>
    )
  }
}

export {StyleTest1};
