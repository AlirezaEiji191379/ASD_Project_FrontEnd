import { ACTIONS } from "../_actions";

const initialState = null;

const activeBoardReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.SET_ACTIVE_BOARD: {
      return action.payload;
    }

    default:
      return state;
  }
};

export default activeBoardReducer;
