import Icon from "@mui/material/Icon";
import React from "react";
import TextareaAutosize from 'react-textarea-autosize';
import Card from '@mui/material/Card';
import { Button } from "@mui/material";
import { connect } from "react-redux";
import { addColumn, addTask } from "../_actions";
class ActionButton extends React.Component{

    state = {
        formOpen: false,
        text: ""
    }

    openForm = () =>{
        this.setState({
            formOpen: true
        });
        console.log(this.state.formOpen);
    }

    closeForm = e => {
        this.setState({
            formOpen : false
        });
    }

    handleInputChange = e => {
        this.setState({
            text: e.target.value
        });
    }

    handleAddColumn = () => {
        const {dispatch} = this.props;
        const {text} = this.state;

        if (text){
            this.setState({
                text: ""
            })
            dispatch(addColumn(text));
        }
    }

    handleAddTask = () => {
        const {dispatch, columnId} = this.props;
        const {text} = this.state;

        if(text){
            this.setState({
                text: ""
            })
            dispatch(addTask(columnId, text));
        }
    }

    renderAddButton = () => {
        const {column} = this.props;

        const buttonText = column ? "Add another column" : "Add another task";
        const buttonTextOpacity = column ? 1 : 0.5;
        const buttonTextColor = column ? "white" : "inherit";
        const buttonTextBackground = column ? "rgba(0,0,0,.15)" : "inherit";

        return (
            <div 
                onClick={this.openForm}
                style= {{
                    ...styles.addButtonContainer,
                    opacity: buttonTextOpacity,
                    color: buttonTextColor,
                    backgroundColor: buttonTextBackground
                    }}
            >
                <Icon>add</Icon>
                <p>{buttonText}</p>
            </div>
        )
    }

    renderForm = () => {

        const {column} = this.props;

        const placeholder = column ? "Enter column title ... " : "Enter a title for this task ...";

        const buttonTitle = column ? "Add Column" : "Add Task";

        return (
            <div>
                <Card style = {{
                    minHeight: 80,
                    minWidth: 272,
                    padding: "6px 8px 2px"
                }}>
                    <TextareaAutosize
                        placeholder={placeholder}
                        autoFocus
                        onBlur={this.closeForm}
                        value = {this.state.text}
                        onChange = {this.handleInputChange}
                        style = {{
                            resize : "none",
                            width : "100%",
                            overflow : "hidden",
                            outline : "none",
                            border : "none"
                        }}
                    />
                </Card>
                <div style={styles.fromContainer}>
                    <Button onMouseDown={column ? this.handleAddColumn : this.handleAddTask} variant="contained" style ={{color : "white", backgroundColor : "#5aac44"}}>
                        {buttonTitle}
                    </Button>
                    <Icon style = {{marginLeft: 8, cursor : "pointer", }}>
                        close
                    </Icon>
                </div>
            </div> 
        )
    }

    render(){
        return this.state.formOpen? <this.renderForm /> : <this.renderAddButton />;
    }
}

const styles = {
    addButtonContainer:{
        display: "flex",
        alignItems: "center",
        cursor: "pointer",
        borderRadius: 3,
        height: 36,
        width: 272,
        paddingLeft: 10
    },
    fromContainer:{
        marginTop: 8,
        display: "flex",
        alignItems: "center"
    }
}

export default connect ()(ActionButton);