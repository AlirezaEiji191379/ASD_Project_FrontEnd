import "../_styles/Column.css";

import React, { Component } from "react";
import { connect } from "react-redux";
import { Droppable, Draggable } from "react-beautiful-dnd";

import Task from "./Task";
import TaskEditor from "./TaskEditor";
import ColumnEditor from "./ColumnEditor";

import shortid from "shortid";

class Column extends Component {
  state = {
    editingTitle: false,
    title: this.props.column.title,
    addingTask: false
  };

  toggleAddingTask = () =>
    this.setState({ addingTask: !this.state.addingTask });

  addTask = async taskText => {
    const { columnId, dispatch } = this.props;

    this.toggleAddingTask();

    const taskId = shortid.generate();

    dispatch({
      type: "ADD_TASK",
      payload: { taskText, taskId, columnId }
    });
  };

  toggleEditingTitle = () =>
    this.setState({ editingTitle: !this.state.editingTitle });

  handleChangeTitle = e => this.setState({ title: e.target.value });

  editColumnTitle = async () => {
    const { columnId, dispatch } = this.props;
    const { title } = this.state;

    this.toggleEditingTitle();

    dispatch({
      type: "CHANGE_COLUMN_TITLE",
      payload: { columnId, columnTitle: title }
    });
  };

  deleteColumn = async () => {
    const { columnId, column, dispatch } = this.props;

    if (window.confirm("Are you sure to delete this column?")) {
      dispatch({
        type: "DELETE_COLUMN",
        payload: {columnId, tasks: column.tasks}
      });
    }
  };

  render() {
    const { column, index } = this.props;
    const { editingTitle, addingTask, title } = this.state;

    return (
      <Draggable draggableId={column._id} index={index}>
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            className="Column"
          >
            {editingTitle ? (
              <ColumnEditor
                column={column}
                title={title}
                handleChangeTitle={this.handleChangeTitle}
                saveColumn={this.editColumnTitle}
                onClickOutside={this.editColumnTitle}
                deleteColumn={this.deleteColumn}
              />
            ) : (
              <div className="Column-Title" onClick={this.toggleEditingTitle}>
                {column.title}
              </div>
            )}

            <Droppable droppableId={column._id}>
              {(provided, _snapshot) => (
                <div ref={provided.innerRef} className="Columns-Tasks">
                  {column.tasks &&
                    column.tasks.map((taskId, index) => (
                      <Task
                        key={taskId}
                        taskId={taskId}
                        index={index}
                        columnId={column._id}
                      />
                    ))}

                  {provided.placeholder}

                  {addingTask ? (
                    <TaskEditor
                      onSave={this.addTask}
                      onCancel={this.toggleAddingTask}
                      adding
                    />
                  ) : (
                    <div className="Toggle-Add-Task" onClick={this.toggleAddingTask}>
                      <ion-icon name="add" /> Add a task
                    </div>
                  )}
                </div>
              )}
            </Droppable>
          </div>
        )}
      </Draggable>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  column: state.columnsById[ownProps.columnId]
});

export default connect(mapStateToProps)(Column);
