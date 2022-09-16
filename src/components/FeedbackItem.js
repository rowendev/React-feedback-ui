import React from "react";
import Card from "./shared/Card";
import Box from "@mui/material/Box";
import { FaTimes } from "react-icons/fa";
import Rating from "@mui/material/Rating";

function FeedbackItem({ item, reverse, deleteHandler }) {
  return (
    <Card className={`${reverse && "reverse"}`}>
      <Rating name="read-only" value={item.rating} readOnly />
      <button className="close" onClick={() => deleteHandler(item.id)}>
        <FaTimes />
      </button>
      <Box className="text-display">{item.text}</Box>
    </Card>
  );
}
FeedbackItem.defaultProps = {
  reverse: false,
};

export default FeedbackItem;
