import React, { Component } from 'react';
import Box from './Box';
import './App.css';
import BoxesContainer from './BoxesContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Color Boxes - Click a box to change color!</h2>
        <BoxesContainer />
      </div>
    );
  }
}  

export default App;
