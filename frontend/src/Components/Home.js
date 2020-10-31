import React from "react";
import { Link } from "react-router-dom";

export default class Home extends React.Component {
  render(){
    return (
      <nav>
        <div>
          <Link style={{ textDecoration: 'none', color: '#FFD700' }} to="/volunteer">
            Volunteer
          </Link>
          <Link style={{ textDecoration: 'none', color: '#FFD700' }} to="/dog">
            Dog
          </Link>
          <Link style={{ textDecoration: 'none', color: '#FFD700' }} to='/trip'>
            Trip Duration
          </Link>
        </div>
      </nav>
    );
  }
}