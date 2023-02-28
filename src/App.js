import "./App.css";

import React, { Component } from "react";
import Board from "./_components/Board";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Header">RAMA</div>

        <Board />
      </div>
    );
  }
}

export default App;
