import React, { useState, useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";
import Card from "./shared/Card";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import Rating from "@mui/material/Rating";

function FeedbackForm() {
  const { addFeedback } = useContext(FeedbackContext);

  const [text, setText] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");
  const [value, setValue] = useState(5);

  const textChangeHandler = (e) => {
    if (text === "") {
      setBtnDisabled(true);
      setMessage("at least type 10 characters");
    } else if (text !== "" && text.trim().length <= 10) {
      setBtnDisabled(true);
      setMessage("at least type 10 characters");
    } else {
      setBtnDisabled(false);
      setMessage(null);
    }
    setText(e.target.value);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    const NewFeedback = {
      rating: value,
      text: text,
    };
    addFeedback(NewFeedback);
    setText("");
    setValue(5);
  };

  return (
    <Card>
      <form onSubmit={formSubmitHandler}>
        <h4>How would you rate our app?</h4>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Rating
            name="score"
            value={value}
            onChange={(e, newValue) => {
              setValue(newValue);
            }}
            sx={{ m: "0.5rem 0" }}
          />
        </div>
        <Box className="input-group" sx={{ m: "0.5rem 0" }}>
          {/* <textarea onChange={textChangeHandler} cols="25" rows="5"></textarea> */}
          <TextField
            variant="standard"
            label="write a review"
            sx={{ width: "100%" }}
            size="small"
            value={text}
            onChange={textChangeHandler}
          />
        </Box>
        {message && <div className="message">[{message}]</div>}
        <Button
          variant="contained"
          endIcon={<SendIcon />}
          size="small"
          disabled={btnDisabled}
          type="submit"
        >
          Send
        </Button>
      </form>
    </Card>
  );
}

export default FeedbackForm;
