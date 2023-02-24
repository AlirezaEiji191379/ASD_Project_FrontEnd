import "../_styles/Board.css";

import React, { Component } from "react";
import { connect } from "react-redux";

import {Column} from "../Column";

class Board extends Component {
  render() {
    const { board } = this.props;

    return (
      <div className="Board">
        {board.columns.map((columnId, index) => {
          return <Column columnId={columnId} key={columnId} index={index} />;
        })}
      </div>
    );
  }
}

const mapStateToProps = state => ({ board: state.board });

const connected =  connect(mapStateToProps)(Board);
export {connected as Board};