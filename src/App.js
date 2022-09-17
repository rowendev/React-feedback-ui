import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/FeedbackData";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "./pages/About";
import BasicSpeedDial from "./components/BasicSpeedDial";

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure?")) {
      // 留下id不同的, filter => (過濾條件)
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
    console.log([newFeedback, ...feedback]);
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          exact
          element={
            <div className="container">
              <FeedbackForm onAddFeedback={addFeedback} />
              <FeedbackStats feedback={feedback} />
              <FeedbackList feedback={feedback} deleteHandler={deleteHandler} />
            </div>
          }
        />
        <Route path="/about" element={<About />} />
      </Routes>
      {/* <BasicSpeedDial /> */}
    </Router>
  );
}

export default App;
