import React, { useState } from "react";
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import Icon from '@mui/material/Icon';
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";
import Form from "./Form";
import { editTask, deleteTask } from "../_actions";
import { connect } from "react-redux";
import ActionButton from "./ActionButton";

const TaskContainer = styled.div`
  margin: 0 0 8px 0;
  position: relative;
  max-width: 100%;
  word-wrap: break-word;
`;

const EditButton = styled(Icon)`
  position: absolute;
  display: none;
  right: 5px;
  top: 5px;
  opacity: 0.5;
  ${TaskContainer}:hover & {
    display: block;
    cursor: pointer;
  }
  &:hover {
    opacity: 0.8;
  }
`;

const DeleteButton = styled(Icon)`
  position: absolute;
  display: none;
  right: 5px;
  bottom: 5px;
  opacity: 0.5;
  ${TaskContainer}:hover & {
    display: block;
    cursor: pointer;
  }
  &:hover {
    opacity: 0.8;
  }
`;

const Task = React.memo(({ text, id, columnID, index, dispatch }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [taskText, setText] = useState(text);

  const closeForm = e => {
    setIsEditing(false);
  };

  const handleChange = e => {
    setText(e.target.value);
  };

  const saveTask = e => {
    e.preventDefault();

    dispatch(editTask(id, columnID, taskText));
    setIsEditing(false);
  };

  const handleDeleteTask = e => {
    dispatch(deleteTask(id, columnID));
  };

  const renderEditForm = () => {
    return (
      <Form text={taskText} onChange={handleChange} closeForm={closeForm}>\
        {/* <label>{}</label> */} 
        {/* TODO add dropdown */}
        <ActionButton onClick={saveTask}>Save</ActionButton>
      </Form>
    );
  };

  const renderTask = () => {
    return (
      <Draggable draggableId={String(id)} index={index}>
        {provided => (
          <TaskContainer
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            onDoubleClick={() => setIsEditing(true)}
          >
            <Card>
              <EditButton
                onMouseDown={() => setIsEditing(true)}
                fontSize="small"
              >
                edit
              </EditButton>
              <DeleteButton fontSize="small" onMouseDown={handleDeleteTask}>
                delete
              </DeleteButton>

              <CardContent>
                <Typography>{text}</Typography>
              </CardContent>
            </Card>
          </TaskContainer>
        )}
      </Draggable>
    );
  };

  return isEditing ? renderEditForm() : renderTask();
});

export default connect()(Task);
