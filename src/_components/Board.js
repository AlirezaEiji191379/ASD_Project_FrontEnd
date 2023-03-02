import "../_styles/Board.css";

import React, { Component } from "react";
import { connect } from "react-redux";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

import Column from "./Column";
import AddColumn from "./AddColumn";

class Board extends Component {
  state = {
    addingColumn: false
  };

  toggleAddingColumn = () =>
    this.setState({ addingColumn: !this.state.addingColumn });

  handleDragEnd = ({ source, destination, type }) => {
    // dropped outside the allowed zones
    if (!destination) return;

    const { dispatch } = this.props;

    // Move column
    if (type === "COLUMN") {
      // Prevent update if nothing has changed
      if (source.index !== destination.index) {
        dispatch({
          type: "MOVE_COLUMN",
          payload: {
            oldColumnIndex: source.index,
            newColumnIndex: destination.index
          }
        });
      }
      return;
    }

    // Move task
    if (
      source.index !== destination.index ||
      source.droppableId !== destination.droppableId
    ) {
      dispatch({
        type: "MOVE_TASK",
        payload: {
          sourceColumnId: source.droppableId,
          destColumnId: destination.droppableId,
          oldTaskIndex: source.index,
          newTaskIndex: destination.index
        }
      });
    }
  };

  render() {
    const { board } = this.props;
    const { addingColumn } = this.state;

    return (
      <DragDropContext onDragEnd={this.handleDragEnd}>
        <Droppable droppableId="board" direction="horizontal" type="COLUMN">
          {(provided, _snapshot) => (
            <div className="Board" ref={provided.innerRef}>
              {board.columns.map((columnId, index) => {
                return <Column columnId={columnId} key={columnId} index={index} />;
              })}

              {provided.placeholder}

              <div className="Add-Column">
                {addingColumn ? (
                  <AddColumn toggleAddingColumn={this.toggleAddingColumn} />
                ) : (
                  <div
                    onClick={this.toggleAddingColumn}
                    className="Add-Column-Button"
                  >
                    <ion-icon name="add" /> Add a column
                  </div>
                )}
              </div>
            </div>
          )}
        </Droppable>
      </DragDropContext>
    );
  }
}

const mapStateToProps = state => ({ board: state.board });

export default connect(mapStateToProps)(Board);
