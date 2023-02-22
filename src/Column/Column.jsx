import "../_styles/Column.css";

import React, { Component } from "react";
import { connect } from "react-redux";

import {Task} from "../Task";

class Column extends Component {
  render() {
    const { column } = this.props;

    return (
      <div className="Column">
        <div className="Column-Title" onClick={this.toggleEditingTitle}>
          {column.title}
        </div>

        {column.tasks &&
          column.tasks.map((taskId, index) => (
            <Task
              key={taskId}
              taskId={taskId}
              index={index}
              columnId={column._id}
            />
          ))}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  list: state.columnsById[ownProps.columnId]
});

// export default connect(mapStateToProps)(Column);
export {Column};