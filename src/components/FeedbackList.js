import React, { useContext } from "react";
import FeedbackItem from "./FeedbackItem";
import Box from "@mui/material/Box";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackList() {
  const { feedback } = useContext(FeedbackContext);

  if (!feedback || feedback.length === 0) {
    return <p>No Feedback yet!</p>;
  }

  return (
    <Box>
      {feedback.map((item) => (
        <FeedbackItem key={item.id} item={item}></FeedbackItem>
      ))}
    </Box>
  );
}

export default FeedbackList;
