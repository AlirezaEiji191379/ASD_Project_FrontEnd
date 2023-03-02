const columnsById = (state = {}, action) => {
  switch (action.type) {
    case "ADD_COLUMN": {
      const { columnId, columnTitle } = action.payload;
      return {
        ...state,
        [columnId]: { _id: columnId, title: columnTitle, tasks: [] }
      };
    }
    case "CHANGE_COLUMN_TITLE": {
      const { columnId, columnTitle } = action.payload;
      return {
        ...state,
        [columnId]: { ...state[columnId], title: columnTitle }
      };
    }
    case "DELETE_COLUMN": {
      const { columnId } = action.payload;
      const { [columnId]: deletedColumn, ...restOfColumns } = state;
      return restOfColumns;
    }
    case "ADD_TASK": {
      const { columnId, taskId } = action.payload;
      return {
        ...state,
        [columnId]: { ...state[columnId], tasks: [...state[columnId].tasks, taskId] }
      };
    }
    case "MOVE_TASK": {
      const {
        oldTaskIndex,
        newTaskIndex,
        sourceColumnId,
        destColumnId
      } = action.payload;
      // Move within the same column
      if (sourceColumnId === destColumnId) {
        const newTasks = Array.from(state[sourceColumnId].tasks);
        const [removedTask] = newTasks.splice(oldTaskIndex, 1);
        newTasks.splice(newTaskIndex, 0, removedTask);
        return {
          ...state,
          [sourceColumnId]: { ...state[sourceColumnId], tasks: newTasks }
        };
      }
      // Move task from one column to another
      const sourceTasks = Array.from(state[sourceColumnId].tasks);
      const [removedTask] = sourceTasks.splice(oldTaskIndex, 1);
      const destinationTasks = Array.from(state[destColumnId].tasks);
      destinationTasks.splice(newTaskIndex, 0, removedTask);
      return {
        ...state,
        [sourceColumnId]: { ...state[sourceColumnId], tasks: sourceTasks },
        [destColumnId]: { ...state[destColumnId], tasks: destinationTasks }
      };
    }
    case "DELETE_TASK": {
      const { taskId: deletedTaskId, columnId } = action.payload;
      const filterDeleted = taskId => taskId !== deletedTaskId;
      return {
        ...state,
        [columnId]: {
          ...state[columnId],
          tasks: state[columnId].tasks.filter(filterDeleted)
        }
      };
    }
    default:
      return state;
  }
};


export default columnsById;