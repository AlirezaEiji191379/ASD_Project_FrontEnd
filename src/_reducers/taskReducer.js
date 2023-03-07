import { ACTIONS } from "../_actions";

const initialState = {
  "task-0": {
    text: "Task",
    id: `task-0`,
    column: "column-0"
  }
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.ADD_TASK: {
      const { text, columnID, id } = action.payload;

      const newTask = {
        text,
        id: `task-${id}`,
        column: columnID
      };

      return { ...state, [`task-${id}`]: newTask };
    }
    case ACTIONS.EDIT_TASK: {
      const { id, newText } = action.payload;
      const task = state[id];
      task.text = newText;
      return { ...state, [`task-${id}`]: task };
    }

    case ACTIONS.DELETE_TASK: {
      const { id } = action.payload;
      const newState = state;
      delete newState[id];
      return newState;
    }
    default:
      return state;
  }
};

export default taskReducer;
