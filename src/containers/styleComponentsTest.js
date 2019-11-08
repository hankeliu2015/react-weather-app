import React, { Component } from 'react';
import { Wrapper, SubmitButton, ResetButton, CancelButton, Title} from '../components/styleButton'

class StyleComponentsTest extends Component {
  render() {
    return (

      <Wrapper>
        <Title>Style-Components Container</Title>

        <SubmitButton>Submit</SubmitButton>
        <ResetButton>Reset</ResetButton>
        <CancelButton>Cancel</CancelButton>
      </Wrapper>
    )
  }
}

export default StyleComponentsTest;
