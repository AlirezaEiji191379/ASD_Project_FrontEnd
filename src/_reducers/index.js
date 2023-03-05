import { combineReducers } from "redux";
import ColumnReducer from "./ColumnReducer";

export default combineReducers({
    columns: ColumnReducer
});