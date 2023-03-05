import Column from "./Column";
import { connect } from "react-redux";
import { Component } from "react";

class App extends Component {
  render(){
    const columns = this.props.columns;
    console.log(this.props.columns);
    return (
      <div className="App">
        <div style={styles.columnContainer}>
          {columns && columns.map(column => <Column key={column.id} title={column.title} tasks= {column.tasks} />)}
        </div>
      </div>
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
