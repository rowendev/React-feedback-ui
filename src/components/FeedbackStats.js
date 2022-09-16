import React from "react";
import Rating from "@mui/material/Rating";

function FeedbackStats({ feedback }) {
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
          <Rating name="read-only" value={average} readOnly size="small" />
        )}
      </h5>
    </div>
  );
}

export default FeedbackStats;
