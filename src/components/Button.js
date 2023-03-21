import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";
export const Button = () => {
  return (
    <Link to="signup">
      <button style={{ marginBottom: "20px" }} className="btn">
        Log In
      </button>
    </Link>
  );
};
