import React from "react";

import Feedback from "./components/Feedback";
import FeedbackForm from "./components/FeedbackForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import { FeedbackProvider } from "./context/FeedbackContext";
import Nav from "./components/Nav";

function App() {
  return (
    <FeedbackProvider>
      <Router>
        <Nav />
        <Routes>
          <Route
            path="/"
            exact
            element={
              <div className="container">
                <FeedbackForm />
                <Feedback />
                {/* <FeedbackStats />
                  <FeedbackList /> */}
              </div>
            }
          />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </FeedbackProvider>
  );
}

export default App;
