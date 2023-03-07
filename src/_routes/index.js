import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Board from "../_components/Board";
import Home from "../_components/Home";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:boardID" element={<Board />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
