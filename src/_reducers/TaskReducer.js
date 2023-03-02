const tasksById = (state = {}, action) => {
  switch (action.type) {
    case "ADD_TASK": {
      const { taskText, taskId } = action.payload;
      return { ...state, [taskId]: { text: taskText, _id: taskId } };
    }
    case "CHANGE_TASK_TEXT": {
      const { taskText, taskId } = action.payload;
      return { ...state, [taskId]: { ...state[taskId], text: taskText } };
    }
    case "DELETE_TASK": {
      const { taskId } = action.payload;
      const { [taskId]: deletedTask, ...restOfTasks } = state;
      return restOfTasks;
    }
    // Find every task from the deleted column and remove it
    case "DELETE_COLUMN": {
      const { tasks: taskIds } = action.payload;
      return Object.keys(state)
        .filter(taskId => !taskIds.includes(taskId))
        .reduce(
          (newState, taskId) => ({ ...newState, [taskId]: state[taskId] }),
          {}
        );
    }
    default:
      return state;
  }
};

export default tasksById;