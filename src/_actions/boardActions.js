import { ACTIONS } from "../_actions";
import { v4 as uuidv4 } from 'uuid';

export const setActiveBoard = id => {
  return {
    type: ACTIONS.SET_ACTIVE_BOARD,
    payload: id
  };
};

export const addBoard = title => {
  const id = uuidv4();
  return {
    type: ACTIONS.ADD_BOARD,
    payload: { title, id }
  };
};
