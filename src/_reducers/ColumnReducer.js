const columnsById = (state = {}, action) => {
  switch (action.type) {
    case "ADD_COLUMN": {
      const { columnId, columnTitle } = action.payload;
      return {
        ...state,
        [columnId]: { _id: columnId, title: columnTitle, tasks: [] }
      };
    }
    case "ADD_TASK": {
      const { columnId, taskId } = action.payload;
      return {
        ...state,
        [columnId]: { ...state[columnId], tasks: [...state[columnId].tasks, taskId] }
      };
    }
    default:
      return state;
  }
};

export default columnsById;