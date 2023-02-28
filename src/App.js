// import "./App.css";
// import {Route, Routes} from "react-router-dom";
// import {Board} from "./Board";

// function App() {
//     return (
//         <div className="App">
//             <Routes>
//                 <Route path="/board" element={<Board/>}/>
//             </Routes>
//         </div>
//     );
// }


// export default App;

import "./App.css";

import React, { Component } from "react";
import Board from "./_components/Board";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Header">React Trello Clone</div>

        <Board />
      </div>
    );
  }
}

export default App;
