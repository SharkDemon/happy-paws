import React from "react";
import { NavLink } from "react-router-dom";

export default function Main() {
  return (
    <nav>
      <div>
        <NavLink to="/volunteer">
          Volunteer
        </NavLink>
        <NavLink to="/dog">
          Dog
        </NavLink>
        <NavLink to='/trip'>
          Trip Duration
        </NavLink>
      </div>
    </nav>
  );
}