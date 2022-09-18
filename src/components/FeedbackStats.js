import React, { useContext } from "react";
import Rating from "@mui/material/Rating";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackStats() {
  const { feedback } = useContext(FeedbackContext);
  //calculate avg
  let average =
    feedback.reduce((acc, curr) => {
      return acc + curr.rating;
    }, 0) / feedback.length;
  average = average.toFixed(1).replace(/[.,]0$/, "");
  return (
    <div className="feedback-stats">
      <h5>{feedback.length} Reviews</h5>
      <h5>
        Average Rating:{" "}
        {isNaN(average) ? null : (
          <Rating
            name="read-only"
            value={+average}
            readOnly
            size="small"
            sx={{ fontSize: "0.9rem" }}
          />
        )}
      </h5>
    </div>
  );
}

export default FeedbackStats;
