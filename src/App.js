import React, { Component } from 'react';
import './App.css';
import Usage from './components/RenderProps';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Render Props</h1>
        <Usage />
      </div>
    );
  }
}

export default App;
