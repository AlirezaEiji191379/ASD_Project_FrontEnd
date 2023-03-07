import { ACTIONS } from "../_actions";
import uuid from "uuidv4";

export const addColumn = (title) => {
  return (dispatch, getState) => {
    const boardID = getState().activeBoard;
    const id = uuid();
    dispatch({
      type: ACTIONS.ADD_COLUMN,
      payload: { title, boardID, id }
    });
  };
};

export const sort = (
  droppableIdStart,
  droppableIdEnd,
  droppableIndexStart,
  droppableIndexEnd,
  draggableId,
  type
) => {
  return (dispatch, getState) => {
    const boardID = getState().activeBoard;
    dispatch({
      type: ACTIONS.DRAG_HAPPENED,
      payload: {
        droppableIdStart,
        droppableIdEnd,
        droppableIndexEnd,
        droppableIndexStart,
        draggableId,
        type,
        boardID
      }
    });
  };
};

export const editTitle = (columnID, newTitle) => {
  return {
    type: ACTIONS.EDIT_COLUMN_TITLE,
    payload: {
      columnID,
      newTitle
    }
  };
};

export const deleteColumn = columnID => {
  return (dispatch, getState) => {
    const boardID = getState().activeBoard;
    return dispatch({
      type: ACTIONS.DELETE_COLUMN,
      payload: {
        columnID,
        boardID
      }
    });
  };
};
