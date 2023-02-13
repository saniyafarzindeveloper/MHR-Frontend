import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";
export const Button = () => {
  return (
    <Link to="signup">
      <button className="btn">Sign Up</button>
    </Link>
  );
};
