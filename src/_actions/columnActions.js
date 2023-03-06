import { ACTIONS } from ".";

export const addColumn = (title) => {
    return {
        type: ACTIONS.ADD_COLUMN,
        payload: title,

    }
}