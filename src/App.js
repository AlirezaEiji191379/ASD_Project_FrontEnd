import "./App.css";
import {Route, Routes} from "react-router-dom";
import React, { Component } from "react";
import { BoardPage } from "./BoardPage/BoardPage";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/board" element={<BoardPage/>}/>
            </Routes>
        </div>
    );
}


export default App;