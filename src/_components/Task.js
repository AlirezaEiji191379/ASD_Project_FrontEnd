import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const Task = ({text}) => {
    return(
        <Card style={styles.taskContainer}>
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              {text}
            </Typography>
        </CardContent>
      </Card>
    )
}

const styles = {
  taskContainer: {
    marginBottom: 10
  }
}
export default Task;