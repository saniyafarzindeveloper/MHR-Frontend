import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { navItems } from "./NavItems";
import { Button } from "./Button";
import Dropdown from "./Dropdown";
const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo">
          <img
            src={require("../images/logo1.jpg")}
            alt="logo"
            width="70"
            height="50"
          />
        </Link>
        <ul className="nav-items">
          {navItems.map((item) => {
            if (item.title === "New User") {
              return (
                <li
                  key={item.id}
                  className={item.cName}
                  onMouseEnter={() => setDropdown(true)}
                  onMouseLeave={() => setDropdown(false)}
                >
                  <Link to={item.path}> {item.title}</Link>
                  {dropdown && <Dropdown />}
                </li>
              );
            }

            return (
              <li key={item.id} className={item.cName}>
                <Link to={item.path}> {item.title}</Link>
              </li>
            );
          })}
        </ul>
        <Button />
      </nav>
    </>
  );
};

export default Navbar;
