import Paper from "@mui/material/Paper";
import React from "react";

function Card({ children, className }) {
  return (
    <Paper
      elevation={6}
      className={`${"card"} ${className ? className : null}`}
    >
      {children}
    </Paper>
  );
}

export default Card;
