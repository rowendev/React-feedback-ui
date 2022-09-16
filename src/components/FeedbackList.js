import React from "react";
import FeedbackItem from "./FeedbackItem";
import Box from "@mui/material/Box";

function FeedbackList({ feedback, deleteHandler }) {
  if (!feedback || feedback.length === 0) {
    return <p>No Feedback yet!</p>;
  }
  return (
    <Box>
      {feedback.map((item) => (
        <FeedbackItem
          key={item.id}
          item={item}
          deleteHandler={deleteHandler}
        ></FeedbackItem>
      ))}
    </Box>
  );
}

export default FeedbackList;
