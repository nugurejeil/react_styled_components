import React, {Component} from 'react';
import styled from 'styled-components';


class App extends Component {
  render(){
    return (
      <Container>
        <Button>Hello!</Button>
        <Button danger>Hello!</Button>
      </Container>
    );
  }
}
const Container = styled.div`
  height:100vh;
  width:100%;
  background:#bdc3c7;
`;
const Button = styled.button`
  border-radius:50px;
  padding:5px;
  min-width: 120px;
  color:white;
  -webkit-appearance: none;
  cursor: pointer;
  background-color: ${props => (props.danger? "#e74c3c" : "#2ecc71")}
  &:active,
  &:focus {
    outline: none;
  }
`;

export default App;
