import React, {Component, Fragment} from 'react';
import "./App.css"


class App extends Component {
  render(){
    return (
      <Fragment>
      <button className="btn btn_success">Hello!</button>
      <button className="btn btn_danger">Hello!</button>
      </Fragment>
    );
  }
}

export default App;
