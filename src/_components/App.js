import Column from "./Column";
import { connect } from "react-redux";
import { Component } from "react";

class App extends Component {
  render(){
    const columns = this.props.columns;
    console.log(this.props.columns);
    return (
      <div className="App">
        {columns && columns.map(column => <Column title={column.title} tasks= {column.tasks} />)}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  columns: state.columns
})

export default connect(mapStateToProps)(App);
