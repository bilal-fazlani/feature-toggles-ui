import React, { Component } from 'react';
import './App.css';
import Application from "./Components/Application";

class App extends Component {
  render() {
    return (
      <div className="App">
          <Application applicationName="engage-web" />
          <Application applicationName="engage-backend" />
          <Application applicationName="pricing-backend" />
      </div>
    );
  }
}

export default App;
