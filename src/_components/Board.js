import React, { PureComponent } from "react";
import Column from "./Column";
import { connect } from "react-redux";
import Create from "./Create";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import { sort, setActiveBoard } from "../_actions";
import { Link } from "react-router-dom";
// import withRouter from "../withRouter";

const ColumnContainer = styled.div`
  display: flex;
  flex-direction: row;
`;


class Board extends PureComponent {
  componentDidMount() {
    const { boardID } = this.props.match.params;

    this.props.dispatch(setActiveBoard(boardID));
  }

  onDragEnd = result => {
    const { destination, source, draggableId, type } = result;

    if (!destination) {
      return;
    }

    this.props.dispatch(
      sort(
        source.droppableId,
        destination.droppableId,
        source.index,
        destination.index,
        draggableId,
        type
      )
    );
  };

  render() {
    const { columns, tasks, match, boards } = this.props;
    // console.log("props:", this.props);
    // console.log("params:", this.params);
    const { boardID } = match.params;
    const board = boards[boardID];
    if (!board) {
      return <p>Board not found</p>;
    }
    const columnOrder = board.columns;

    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <Link to="/">Go Back</Link>
        <h2>{board.title}</h2>
        <Droppable droppableId="all-columns" direction="horizontal" type="column">
          {provided => (
            <ColumnContainer
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {columnOrder.map((columnID, index) => {
                const column = columns[columnID];
                if (column && column.tasks) {
                  const columnTasks = column.tasks.map(taskID => tasks[taskID]);

                  return (
                    <Column
                      columnID={column.id}
                      key={column.id}
                      title={column.title}
                      tasks={columnTasks}
                      index={index}
                    />
                  );
                }
              })}
              {provided.placeholder}
              <Create column />
            </ColumnContainer>
          )}
        </Droppable>
      </DragDropContext>
    );
  }
}

const mapStateToProps = state => ({
  columns: state.columns,
  tasks: state.tasks,
  boards: state.boards
});

export default connect(mapStateToProps)(withRouter(Board));
