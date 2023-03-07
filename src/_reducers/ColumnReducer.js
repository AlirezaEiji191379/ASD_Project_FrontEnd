import { ACTIONS } from "../_actions";

const initialState = {
  "column-0": {
    id: "column-0",
    tasks: ["task-0"],
    title: "myColumn",
    board: "board-0"
  }
};

const columnReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.ADD_COLUMN: {
      const { title, id } = action.payload;
      const newColumn = {
        title: title,
        id: `column-${id}`,
        tasks: []
      };

      const newState = { ...state, [`column-${id}`]: newColumn };

      return newState;
    }

    case ACTIONS.ADD_TASK: {
      const { columnID, id } = action.payload;
      const column = state[columnID];
      column.tasks.push(`task-${id}`);
      return { ...state, [columnID]: column };
    }

    case ACTIONS.DRAG_HAPPENED:
      const {
        droppableIdStart,
        droppableIdEnd,
        droppableIndexEnd,
        droppableIndexStart,
        type
      } = action.payload;

      // move tasks between columns
      if (droppableIdStart !== droppableIdEnd) {
        const initialColumn = state[droppableIdStart];
        const lastColumn = state[droppableIdEnd];
        const task = initialColumn.tasks.splice(droppableIndexStart, 1);

        lastColumn.tasks.splice(droppableIndexEnd, 0, ...task);
        return {
          ...state,
          [droppableIdStart]: initialColumn,
          [droppableIdEnd]: lastColumn
        };
      }
      return state;

    case ACTIONS.DELETE_TASK: {
      const { columnID, id } = action.payload;

      const column = state[columnID];
      const newTasks = column.tasks.filter(taskID => taskID !== id);

      return { ...state, [columnID]: { ...column, tasks: newTasks } };
    }

    case ACTIONS.EDIT_COLUMN_TITLE: {
      const { columnID, newTitle } = action.payload;

      const column = state[columnID];
      column.title = newTitle;
      return { ...state, [columnID]: column };
    }

    case ACTIONS.DELETE_COLUMN: {
      const { columnID } = action.payload;
      const newState = state;
      delete newState[columnID];
      return newState;
    }

    default:
      return state;
  }
};

export default columnReducer;
