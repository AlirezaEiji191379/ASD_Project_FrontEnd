import React from "react";
import Button from '@mui/material/Button';


const ActionButton = ({ children, onClick }) => {
  return (
    <Button variant="contained" color="success" onMouseDown={onClick}>
      {children}
    </Button>
  );
};

export default ActionButton;
