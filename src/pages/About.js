import React from "react";
import Card from "../components/shared/Card";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="container">
      <Card>
        <div className="about">
          <h1>About This Project</h1>
          <p>This Feedback UI is build with React</p>
          <p>Version: 1.0.0</p>
          <p>
            <Link to="/">Back to homepage</Link>
          </p>
        </div>
      </Card>
    </div>
  );
}

export default About;
