import { ACTIONS } from "../_actions";

const initialState = {
  "board-0": {
    id: "board-0",
    columns: ["column-0"],
    title: "myboard"
  }
};

const boardsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.ADD_COLUMN: {
      const { boardID, id } = action.payload;
      const board = state[boardID];
      const newColumnID = `column-${id}`;
      const newColumns = [...board.columns, newColumnID];
      board.columns = newColumns;
      return { ...state, [boardID]: board };
    }

    case ACTIONS.DRAG_HAPPENED: {
      return state;
    }
    
    case ACTIONS.DELETE_COLUMN: {
      const { columnID, boardID } = action.payload;
      const board = state[boardID];
      const columns = board.columns;
      const newColumns = columns.filter(id => id !== columnID);
      board.columns = newColumns;
      return { ...state, [boardID]: board };
    }

    case ACTIONS.ADD_BOARD: {
      const { title, id } = action.payload;
      const newID = `board-${id}`;
      const newBoard = {
        id: newID,
        title,
        columns: []
      };

      return { ...state, [newID]: newBoard };
    }

    default:
      return state;
  }
};

export default boardsReducer;
