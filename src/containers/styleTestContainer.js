import React, { Component } from 'react';
import styled from 'styled-components';
import { Wrapper, SubmitButton, ResetButton, CancelButton, Title} from '../components/styleButton'
import {StyleTest1} from '../components/styleTest1'

class StyleComponentsTest extends Component {
  render() {
    return (
      <div>
        <StyleTest1 />
      </div>
    )
  }
}

export default StyleComponentsTest;
