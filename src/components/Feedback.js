import React, { useContext } from "react";
import FeedbackStats from "./FeedbackStats";
import FeedbackList from "./FeedbackList";
import FeedbackContext from "../context/FeedbackContext";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

function Feedback() {
  const { isLoading } = useContext(FeedbackContext);

  return isLoading ? (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "cneter" }}
    >
      <CircularProgress />
    </Box>
  ) : (
    <>
      <FeedbackStats />
      <FeedbackList />
    </>
  );
}

export default Feedback;
