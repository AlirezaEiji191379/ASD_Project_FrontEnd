import { combineReducers } from "redux";
import columnReducer from "./columnReducer";
import taskReducer from "./taskReducer";
import boardsReducer from "./boardsReducer";
import boardOrderReducer from "./boardOrderReducer";
import activeBoardReducer from "./activeBoardReducer";

export default combineReducers({
    columns: columnReducer,
    tasks: taskReducer,
    boards: boardsReducer,
    boardOrder: boardOrderReducer,
    activeBoard: activeBoardReducer
});