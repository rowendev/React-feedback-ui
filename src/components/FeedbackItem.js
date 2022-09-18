import React, { useContext } from "react";
import Card from "./shared/Card";
import Box from "@mui/material/Box";
import { FaTimes } from "react-icons/fa";
import Rating from "@mui/material/Rating";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackItem({ item, reverse }) {
  const { deleteFeedback } = useContext(FeedbackContext);
  return (
    <Card className={`${reverse && "reverse"}`}>
      <Rating
        name="read-only"
        value={item.rating}
        readOnly
        sx={{ fontSize: "0.8rem" }}
      />
      <button className="close" onClick={() => deleteFeedback(item.id)}>
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
