import { ACTIONS } from "../_actions";

let columnID = 1;
let taskID = 1

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

        case ACTIONS.ADD_TASK:
            const newTask = {
                text: action.payload.text,
                id: taskID
            }
            taskID = taskID + 1;

            const newState = state.map(column => {
                if(column.id === action.payload.columnId){
                    return {
                        ...column,
                        tasks: [...column.tasks, newTask]
                    }
                }
                else{
                    return column;
                }
            })

            return newState;

        default:
            return state;
    }
}

export default ColumnReducer;