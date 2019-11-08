import React, { Component } from 'react';
import { Wrapper, SubmitButton, ResetButton, CancelButton} from '../components/styleButton'

class StyleComponentsTest extends Component {
  render() {
    return (

      <Wrapper>
        <h3>Style-Components Container</h3>
      
        <SubmitButton>Submit</SubmitButton>
        <ResetButton>Reset</ResetButton>
        <CancelButton>Cancel</CancelButton>
      </Wrapper>
    )
  }
}

export default StyleComponentsTest;
