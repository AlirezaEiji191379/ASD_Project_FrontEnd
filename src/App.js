import "./App.css";
import {Route, Routes} from "react-router-dom";
import {Board} from "./Board";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/board" element={<Board/>}/>
            </Routes>
        </div>
    );
}


export default App;