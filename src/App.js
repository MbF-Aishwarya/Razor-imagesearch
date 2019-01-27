import React, { Component } from 'react';
import './App.css';
import ColorComponent from "./colors.js";
import InputComponent from "./input.js";
import TextComponent from "./colortext.js";


class App extends Component {
  render() {
    return (
        <div className="App">
          <ColorComponent />
          <div className="container">
	          <div className="filter-section">
	            <TextComponent />
	            <InputComponent />
	          </div>
         </div>
        </div>
    );
  }
}

export default App;
