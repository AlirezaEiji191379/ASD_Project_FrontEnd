import { ACTIONS } from "../_actions";

let columnID = 2;

const initialState = [
    {
        title : "First Column",
        id : "0",
        tasks : [
            {
                id : 0,
                text : "task"
            }
        ]
    }
]


const ColumnReducer = (state = initialState, action) => {
    switch(action.type){
        case ACTIONS.ADD_COLUMN:
            const newColumn = {
                title: action.payload,
                tasks: [],
                id: columnID
            }
            columnID = columnID + 1;
            return [...state, newColumn];
        default:
            return state;
    }
}

export default ColumnReducer;