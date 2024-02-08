import React from "react";
import { Link } from "react-router-dom";

export default () => {
  return (
    <ul className="flex gap-4">
      <li>
        <Link to="/home/ag-grid">
          AG Grid
        </Link>
      </li>
      <li>
        <Link to="/home/userhelp">
          UserHelp
        </Link>
      </li>
      <li>
        <Link to="/home/userinfo">
          User
        </Link>
      </li>
      <button className="bg-sky-500/50 text-white p-1 rounded">
        <Link to="/">
          Logout
        </Link>
      </button>
    </ul>
  );
};
