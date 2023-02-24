const tasksById = (state = {}, action) => {
  switch (action.type) {
    case "ADD_TASK": {
      const { taskText, taskId } = action.payload;
      return { ...state, [taskId]: { text: taskText, _id: taskId } };
    }
    default:
      return state;
  }
};

export default tasksById;