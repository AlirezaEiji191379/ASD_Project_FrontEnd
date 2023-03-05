import React from "react";
import Task from "./Task";

const Column = ({title, tasks}) => {
    return(
        <div style= {styles.ColumnContainer}>
        <h3>{title}</h3>
        {tasks.map(task => <Task text={task.text} />)}
        </div>
    )
}

const styles = {
    ColumnContainer: {
        backgroundColor: "#ECEBEB",
        borderRadius: 3,
        width: 300,
        padding: 6
    }
}

export default Column;