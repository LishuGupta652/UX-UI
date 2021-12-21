import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h1>404 Route not found</h1>
      <h1>
        <Link to="/">Go to Home</Link>
      </h1>
    </div>
  );
};

export default NotFound;
