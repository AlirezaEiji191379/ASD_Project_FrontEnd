import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

const TaskContainer = styled.div`
  margin-bottom: 10px
`


const Task = ({text, id, index}) => {
    return(
      <Draggable draggableId={String(id)} index={index}>
        {provided => (
          <TaskContainer
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
              <Card>
                <CardContent>
                  <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {text}
                  </Typography>
                </CardContent>
              </Card>
          </TaskContainer>
        )}
      </Draggable>
    )
}

export default Task;