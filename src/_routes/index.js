import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Board from "../_components/Board";
import Home from "../_components/Home";

const AppRouter = () => {
  return (
    <Router>
      <div>
        <Route path="/" exact component={Home} />
        <Route path="/:boardID" component={Board} />
      </div>
    </Router>
  );
};

export default AppRouter;
