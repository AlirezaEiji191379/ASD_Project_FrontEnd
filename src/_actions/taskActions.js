import { ACTIONS } from ".";

export const addTask = (columnID, text) => {
    return {
        type: ACTIONS.ADD_TASK,
        payload: {text, columnID}
    }
}

export const editTask = (id, columnID, newText) => {
    return {
      type: ACTIONS.EDIT_TASK,
      payload: { id, columnID, newText }
    };
  };
  
  export const deleteTask = (id, columnID) => {
    return {
      type: ACTIONS.DELETE_TASK,
      payload: { id, columnID }
    };
  };
  