import { ACTIONS } from ".";

export const addColumn = (title) => {
    return {
        type: ACTIONS.ADD_COLUMN,
        payload: title,

    }
}

export const sort = (
    droppableIdStart,
    droppableIdEnd,
    droppableIndexStart,
    droppableIndexEnd,
    draggableId
) => {
    return{
        type: ACTIONS.DRAG_HAPPENED,
        payload: {
            droppableIdStart,
            droppableIdEnd,
            droppableIndexStart,
            droppableIndexEnd,
            draggableId
        }
    }
}