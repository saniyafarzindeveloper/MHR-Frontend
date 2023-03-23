import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";
export const Button = () => {
  return (
    <Link to="login">
      <button style={{ marginBottom: "20px" }} className="nav-button">
       <a className="login-btn-style" href="/login"> Log In</a>
      </button>
    </Link>
  );
};
