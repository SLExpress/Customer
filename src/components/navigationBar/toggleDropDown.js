/*  N. R Yamasinghe  IT18233704 version - 01 */
import React from "react";
import { Link } from "react-router-dom";

const toggleDropDown = () => {
  return (
    <li className="nav-item dropdown">
      <Link
        to="/logout"
        className="nav-link dropdown-toggle"
        data-toggle="dropdown"
        style={{ color: "#fff" }}
      ></Link>
      <div className="dropdown-menu">
        <Link to="/logout" className="dropdown-item ">
          <p className="text-color-ash">Log Out</p>
        </Link>
      </div>
    </li>
  );
};

export default toggleDropDown;
