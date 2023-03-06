import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Draggable } from "react-beautiful-dnd";

const Task = ({text, id, index}) => {
    return(
      <Draggable draggableId={String(id)} index={index}>
        {provided => (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <Card style={styles.taskContainer}>
              <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  {text}
                </Typography>
              </CardContent>
            </Card>
          </div>
        )}
      </Draggable>
    )
}

const styles = {
  taskContainer: {
    marginBottom: 10
  }
}
export default Task;