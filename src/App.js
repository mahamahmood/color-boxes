import React, { Component } from 'react';
import Box from './Box';
import './App.css';
import BoxesContainer from './BoxesContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Hello World</h2>
        <BoxesContainer />
      </div>
    );
  }
}  

export default App;
