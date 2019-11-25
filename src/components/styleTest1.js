import React, { Component } from 'react';
import styled from 'styled-components';
import { Wrapper, SubmitButton, ResetButton, CancelButton, Title} from '../components/styleButton'

const Button = styled.button`

  background: ${props => props.primary ? "yellow" : "white"};
  color: ${props => props.primary ? "white" : "red"};
  color: ${props => props.secondary ? "black" : "palevioletred"};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  `;

const ReversedButton = props => <Button {...props} children={props.children.split('').reverse()} />

const Link = ({ className, children }) => (
  <a className={className}>{children}</a>
);

const StyledLink = styled(Link)`
  color: maroon;
  font-weight: bold;
`;

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: ${props => props.inputColor || "red"}
  background: papayawhip;
  border: none;
  border-radius: 3px;
`;


class StyleTest1 extends Component {

  render() {
    // debugger
    return (

      <Wrapper>
        <Title>Style-Components Container</Title>

        <SubmitButton>Submit</SubmitButton>
        <ResetButton>Reset</ResetButton>
        <CancelButton>Cancel</CancelButton>

        <Button>Normal</Button>
        <Button primary>Primary</Button>
        <Button secondary>Secondary</Button>

        <br/>
        
        <Button as="a" href="/">Link with Button Styles</Button>
        <Button as={ReversedButton}>Customized Button with Button Styles</Button>

        <br />
        <Link>UnStyled, Unformated Link</Link>
        <StyledLink>Styled, formated Link</StyledLink>
        <br />
        <Input type='text' defaultValue="show default color red"/>
        <Input inputColor="blue" type='text' defaultValue="Overwrite the default color changed to blue"/>
      </Wrapper>
    )
  }
}

export {StyleTest1};
