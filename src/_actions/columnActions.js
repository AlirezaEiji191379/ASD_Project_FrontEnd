import { ACTIONS } from ".";

export * from "./columnActions";


export const addColumn = (title) => {
    return {
        type: ACTIONS.ADD_COLUMN,
        payload: title,

    }
}