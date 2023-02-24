import {combineReducers, createStore} from "redux";
import {configureStore} from '@reduxjs/toolkit'
import throttle from "lodash.throttle";
import board from "./_reducers/BoardReducer";
import columnsById from "./_reducers/ColumnReducer";
import tasksById from "./_reducers/TaskReducer";
import seed from "./seed";

const reducers = combineReducers({
    board,
    columnsById,
    tasksById
});

// const saveState = state => {
//   try {
//     const serializedState = JSON.stringify(state);
//     localStorage.setItem("state", serializedState);
//   } catch {
//     // ignore write errors
//   }
// };
//
// const loadState = () => {
//   try {
//     const serializedState = localStorage.getItem("state");
//     if (serializedState === null) {
//       return undefined;
//     }
//     return JSON.parse(serializedState);
//   } catch (err) {
//     return undefined;
//   }
// };
//
// const persistedState = loadState();
// const store = configureStore(reducers, persistedState);
//
// store.subscribe(
//   throttle(() => {
//     saveState(store.getState());
//   }, 1000)
// );

const store = createStore(reducers);
console.log(store.getState());
seed(store);
export default store;
  
