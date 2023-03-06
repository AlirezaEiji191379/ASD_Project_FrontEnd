import Column from "./Column";
import { connect } from "react-redux";
import { Component } from "react";
import ActionButton from "./ActionButton";
import { DragDropContext } from "react-beautiful-dnd";
import {sort} from "../_actions";
import styled from "styled-components";

const ColumnContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

class App extends Component {

  onDragEnd = (result) => {
    const {destination, source, draggableId} = result;
    
    if (!destination){
      return;
    }

    this.props.dispatch(sort(
      source.droppableId,
      destination.droppableId,
      source.index,
      destination.index,
      draggableId
    ))
  }

  render(){
    const columns = this.props.columns;
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <div>
          <ColumnContainer>
            {columns && columns.map(column => (
              <Column
                columnId = {column.id}
                key={column.id}
                title={column.title}
                tasks= {column.tasks}
              /> ))}
              <ActionButton column />
          </ColumnContainer>
        </div>
      </DragDropContext>
    );
  }
}

const mapStateToProps = state => ({
  columns: state.columns
})

export default connect(mapStateToProps)(App);
