import React from "react";
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';

const Task = () => {
    return(
        <Card sx={{ minWidth: 275 }}>
        {/* <CardContent> */}
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Define a task
          </Typography>
          {/* <Typography variant="h5" component="div">
            be{bull}nev{bull}o{bull}lent
          </Typography> */}
          {/* <Typography sx={{ mb: 1.5 }} color="text.secondary">
            adjective
          </Typography>
          <Typography variant="body2">
            well meaning and kindly.
            <br />
            {'"a benevolent smile"'}
          </Typography> */}
        {/* </CardContent> */}
        {/* <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions> */}
      </Card>
    )
}

export default Task;