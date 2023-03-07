import { ACTIONS } from "../_actions";
import uuid from "uuidv4";

export const setActiveBoard = id => {
  return {
    type: ACTIONS.SET_ACTIVE_BOARD,
    payload: id
  };
};

export const addBoard = title => {
  const id = uuid();
  return {
    type: ACTIONS.ADD_BOARD,
    payload: { title, id }
  };
};
