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
        default:
            return state;
    }
}

export default ColumnReducer;