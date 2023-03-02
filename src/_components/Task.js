import "../_styles/Task.css";

import React, { Component } from "react";
import { connect } from "react-redux";
import { Draggable } from "react-beautiful-dnd";

import TaskEditor from "./TaskEditor";

class Task extends Component {
  state = {
    hover: false,
    editing: false
  };

  startHover = () => this.setState({ hover: true });
  endHover = () => this.setState({ hover: false });

  startEditing = () =>
    this.setState({
      hover: false,
      editing: true,
      text: this.props.task.text
    });

  endEditing = () => this.setState({ hover: false, editing: false });

  editTask = async text => {
    const { task, dispatch } = this.props;

    this.endEditing();

    dispatch({
      type: "CHANGE_TASK_TEXT",
      payload: { taskId: task._id, taskText: text }
    });
  };

  deleteTask = async () => {
    const { columnId, task, dispatch } = this.props;

    if (window.confirm("Are you sure to delete this task?")) {
      dispatch({
        type: "DELETE_TASK",
        payload: { taskId: task._id, columnId }
      });
    }
  };

  render() {
    const { task, index } = this.props;
    const { hover, editing } = this.state;

    if (!editing) {
      return (
        <Draggable draggableId={task._id} index={index}>
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              className="Task"
              onMouseEnter={this.startHover}
              onMouseLeave={this.endHover}
            >
              {hover && (
                <div className="Task-Icons">
                  <div className="Task-Icon" onClick={this.startEditing}>
                    <ion-icon name="create" />
                  </div>
                </div>
              )}

              {task.text}
            </div>
          )}
        </Draggable>
      );
    } else {
      return (
        <TaskEditor
          text={task.text}
          onSave={this.editTask}
          onDelete={this.deleteTask}
          onCancel={this.endEditing}
        />
      );
    }
  }
}

const mapStateToProps = (state, ownProps) => ({
  task: state.tasksById[ownProps.taskId]
});

export default connect(mapStateToProps)(Task);
