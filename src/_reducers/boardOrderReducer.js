import { ACTIONS } from "../_actions";
import uuid from "uuidv4";

const initialState = ["board-0"];

const boardOrderReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.ADD_BOARD: {
      return [...state, `board-${action.payload.id}`];
    }
    default:
      return state;
  }
};

export default boardOrderReducer;