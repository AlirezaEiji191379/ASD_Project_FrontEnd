import { combineReducers, createStore } from "redux";
import seed from "./seed";
import board from "./_reducers/BoardReducer"
import listsById from "./_reducers/ColumnReducer"
import cardsById from "./_reducers/TaskReducer"

const reducers = combineReducers({
  board,
  listsById,
  cardsById
});


const store = createStore(reducers);
seed(store);

export default store;
