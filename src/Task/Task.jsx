import "../_styles/Task.css";

import React, { Component } from "react";
import { connect } from "react-redux";

class Task extends Component {
  render() {
    const { task } = this.props;

    return <div className="Task">{task.text}</div>;
  }
}

const mapStateToProps = (state, ownProps) => ({
  card: state.tasksById[ownProps.taskId]
});

// export default connect(mapStateToProps)(Task);
export {Task};