import Icon from "@mui/material/Icon";
import React from "react";

class ActionButton extends React.Component{
    renderAddButton = () => {
        const {column} = this.props;

        const buttonText = column ? "Add another column" : "Add another task";
        const buttonTextOpacity = column ? 1 : 0.5;
        const buttonTextColor = column ? "white" : "inherit";
        const buttonTextBackground = column ? "rgba(0,0,0,.15)" : "inherit";

        return (
            <div 
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

    render(){
        return <this.renderAddButton />;
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
    }
}

export default ActionButton;