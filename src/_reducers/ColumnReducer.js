import { ACTIONS } from "../_actions";

let columnID = 1;
let taskID = 1;

const initialState = [
    {
        title : "Column",
        id : 0,
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
        {
            const newColumn = {
                title: action.payload,
                tasks: [],
                id: columnID
            }
            columnID = columnID + 1;
            return [...state, newColumn];
        }

        case ACTIONS.ADD_TASK:
        {
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
        }

        case ACTIONS.DRAG_HAPPENED:
        {
            const {
                droppableIdStart,
                droppableIdEnd,
                droppableIndexStart,
                droppableIndexEnd,
                draggableId
            } = action.payload;

            const newState = [...state];

        //TODO use this for sorting based on priority
            // if(droppableIdStart === droppableIdEnd){
            //     const column = state.find(column =>
            //         droppableIdStart === column.id);
            //     const task = column.tasks.splice(droppableIndexStart, 1);
            //     column.tasks.splice(droppableIndexEnd, 0, ...task)
            // }

            return newState;
        }

        default:
            return state;
    }
}

export default ColumnReducer;