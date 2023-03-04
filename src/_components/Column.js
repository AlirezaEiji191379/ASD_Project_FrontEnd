import React from "react";
import Task from "./Task";

const Column = ({title}) => {
    return(
        <div style= {styles.container}>
        <h3>{title}</h3>
        <Task />
        </div>
    )
}

const styles = {
    container: {
        backgroundColor: "#ECEBEB",
        borderRadius: 3,
        width: 300,
        padding: 6
    }
}

export default Column;