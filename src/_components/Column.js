import React from "react";
import Task from "./Task";
import ActionButton from "./ActionButton";
import { Droppable } from "react-beautiful-dnd";

const Column = ({title, tasks, columnId}) => {
    return(
        <Droppable droppableId={String(columnId)}>
            {provided =>(
                <div {...provided.droppableProps} ref={provided.innerRef} style={styles.ColumnContainer}>
                    <h3>{title}</h3>
                    {tasks && tasks.map((task, index) =>
                        <Task
                            key={task.id}
                            index= {index}
                            text={task.text} 
                            id= {task.id}
                        />)}
                    <ActionButton columnId= {columnId}/>
                    {provided.placeholder}
                </div>
            )}
        </Droppable>
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