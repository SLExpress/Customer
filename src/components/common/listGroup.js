import React from "react";
import { Link } from "react-router-dom";

const listGroup = ({ item1, item2, item3, title, link1, link2, link3 }) => {
  return (
    <div
      className="card listGroup"
      style={{ width: "18rem", position: "fixed" }}
    >
      <div className="card-header textBold">{title}</div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item text-color-ash">
          <Link to={`/${link1}`} style={{ textDecoration: "none" }}>
            {item1}
          </Link>
        </li>
        <li className="list-group-item text-color-ash">
          <Link to={`/${link2}`} style={{ textDecoration: "none" }}>
            {item2}
          </Link>
        </li>
        <li className="list-group-item text-color-ash">
          <Link to={`/${link3}`} style={{ textDecoration: "none" }}>
            {item3}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default listGroup;
