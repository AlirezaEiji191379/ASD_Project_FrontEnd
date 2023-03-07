import React from "react";
import Icon from '@mui/material/Icon';
import ActionButton from "./ActionButton";
import { connect } from "react-redux";
import { addColumn, addTask } from "../_actions";
import styled from "styled-components";
import Form from "./Form";
import OpenForm from "./OpenForm";

class Create extends React.PureComponent {
  state = {
    formOpen: false,
    text: ""
  };

  openForm = () => {
    this.setState({
      formOpen: true
    });
  };

  closeForm = e => {
    this.setState({
      formOpen: false
    });
  };

  handleInputChange = e => {
    this.setState({
      text: e.target.value
    });
  };

  handleAddColumn = () => {
    const { dispatch } = this.props;
    const { text } = this.state;

    if (text) {
      this.setState({
        text: ""
      });
      dispatch(addColumn(text));
    }
  };

  handleAddTask = () => {
    const { dispatch, columnID } = this.props;
    const { text } = this.state;

    if (text) {
      this.setState({
        text: ""
      });
      dispatch(addTask(columnID, text));
    }
  };

  renderOpenForm = () => {
    const { column } = this.props;

    const buttonText = column ? "Add another column" : "Add another task";
    const buttonTextOpacity = column ? 1 : 0.5;
    const buttonTextColor = column ? "white" : "inherit";
    const buttonTextBackground = column ? "rgba(0,0,0,.15)" : "inherit";

    const OpenFormButton = styled.div`
      display: flex;
      align-items: center;
      cursor: pointer;
      border-radius: 3px;
      height: 36px;
      margin-left: 8px;
      width: 300px;
      padding-left: 10px;
      padding-right: 10px;
      opacity: ${buttonTextOpacity};
      color: ${buttonTextColor};
      background-color: ${buttonTextBackground};
    `;

    return (
      <OpenFormButton onClick={this.openForm}>
        <Icon>add</Icon>
        <p style={{ flexShrink: 0 }}>{buttonText}</p>
      </OpenFormButton>
    );
  };

  render() {
    const { text } = this.state;
    const { column } = this.props;
    return this.state.formOpen ? (
      <Form
        text={text}
        onChange={this.handleInputChange}
        closeForm={this.closeForm}
      >
        <ActionButton onClick={column ? this.handleAddColumn : this.handleAddTask}>
          {column ? "Add Column" : "Add Task"}
        </ActionButton>
      </Form>
    ) : (
      <OpenForm column={column} onClick={this.openForm}>
        {column ? "Add another column" : "Add another task"}
      </OpenForm>
    );
  }
}

export default connect()(Create);
