import { ACTIONS } from ".";

export const addTask = (columnId, text) => {
    return {
        type: ACTIONS.ADD_TASK,
        payload: {text, columnId}
    }
}