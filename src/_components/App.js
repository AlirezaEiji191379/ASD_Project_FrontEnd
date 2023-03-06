import Column from "./Column";
import { connect } from "react-redux";
import { Component } from "react";
import ActionButton from "./ActionButton";
import { DragDropContext } from "react-beautiful-dnd";

class App extends Component {

  onDragEnd = () => {
    //TODO
  }

  render(){
    const columns = this.props.columns;
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <div>
          <div style={styles.columnContainer}>
            {columns && columns.map(column => (
              <Column
                columnId = {column.id}
                key={column.id}
                title={column.title}
                tasks= {column.tasks}
              /> ))}
              <ActionButton column />
          </div>
        </div>
      </DragDropContext>
    );
  }
}

const styles = {
  columnContainer:{
    display: "flex",
    flexDirection: "row"
  }
}

const mapStateToProps = state => ({
  columns: state.columns
})

export default connect(mapStateToProps)(App);
