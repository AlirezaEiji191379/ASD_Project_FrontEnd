import "./App.css";

import {Route, Routes} from "react-router-dom";
import Board from "./_components/Board";

function App() {
  return (
      <>
        <div className="App">
          <div className="Header">React Trello Clone</div>
            <Routes>
                <Route path="/board" element={<Board/>}/>
            </Routes>
        </div>
      </>
  );
}

export default App;
