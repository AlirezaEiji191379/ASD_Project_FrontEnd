import { combineReducers, createStore } from "redux";
import seed from "./seed";
import board from "./_reducers/BoardReducer";
import columnsById from "./_reducers/ColumnReducer";
import tasksById from "./_reducers/TaskReducer";

const reducers = combineReducers({
  board,
  columnsById,
  tasksById
});

const store = createStore(reducers);
seed(store);

export default store;
