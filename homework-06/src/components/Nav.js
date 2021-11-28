import React from "react";
import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <div className="Nav">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/albums">Albums</Link>
        </li>
        <li>
          <Link to="/posts">Posts</Link>
        </li>
      </ul>
    </div>
  );
};
