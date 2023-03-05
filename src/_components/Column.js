import React from "react";
import Task from "./Task";
import ActionButton from "./ActionButton";

const Column = ({title, tasks, columnId}) => {
    return(
        <div style= {styles.ColumnContainer}>
            <h3>{title}</h3>
            {tasks.map(task => <Task key={task.id} text={task.text} />)}
            <ActionButton columnId= {columnId}/>
        </div>
    )
}

const styles = {
    ColumnContainer: {
        backgroundColor: "#dfe3e6",
        borderRadius: 3,
        width: 300,
        padding: 6,
        height: "100%",
        marginRight: 9
    }
}

export default Column;