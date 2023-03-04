import React from "react";


const Column = ({title}) => {
    return(
        <div style= {styles.container}>
        <h3>{title}</h3>
        </div>
    )
}

const styles = {
    container: {
        backgroundColor: "#ccc",
        borderRadius: 3,
        width: 300
    }
}

export default Column;