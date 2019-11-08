import styled from 'styled-components';

const Wrapper = styled.div`
  background: papayawhip;
  color: white;
`;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const SubmitButton = styled.button`
  color: maroon;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  borderL 2px solid;
  border-radius: 3px;
  display: inline-block;
`;

const ResetButton = styled.button`
  color: tomato;
  border-color: tomato;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid;
  border-radius: 3px;
  display: inline-block;
`;

const CancelButton = styled(SubmitButton)`
  color: black;
  border-color: black;
`;

export { SubmitButton, ResetButton, Wrapper, CancelButton, Title };
