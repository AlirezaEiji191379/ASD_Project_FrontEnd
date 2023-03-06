import React from "react";
import Task from "./Task";
import ActionButton from "./ActionButton";
import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";

const ColumnContainer = styled.div `
    background-color: #dfe3e6;
    border-radius: 3px;
    width: 300px;
    padding: 6px;
    height: 100%;
    margin-right: 9px;
`


const Column = ({title, tasks, columnId}) => {
    return(
        <Droppable droppableId={String(columnId)}>
            {provided =>(
                <ColumnContainer {...provided.droppableProps} ref={provided.innerRef} >
                    <h3>{title}</h3>
                    {tasks && tasks.map((task, index) =>
                        <Task
                            key={task.id}
                            index= {index}
                            text={task.text} 
                            id= {task.id}
                        />)}
                    {provided.placeholder}
                    <ActionButton columnId= {columnId} task/>
                </ColumnContainer>
            )}
        </Droppable>
    )
}

export default Column;