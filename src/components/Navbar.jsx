import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
      <div className="navbar">
        <NavLink to={"/"}>Home</NavLink>
      </div>
  );
};

export default Navbar;
