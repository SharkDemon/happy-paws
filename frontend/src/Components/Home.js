import React from "react";
import { Link } from "react-router-dom";

export default class Home extends React.Component {
  render(){
    return (
      <nav>
        <div>
          <Link style={{ textDecoration: 'none', color: '#FFD700' }} to="/volunteer">
            Volunteers
          </Link>
          <Link style={{ textDecoration: 'none', color: '#FFD700' }} to="/dog">
            Dogs
          </Link>
          <Link style={{ textDecoration: 'none', color: '#FFD700' }} to='/trip'>
            Trips
          </Link>
          <Link style={{ textDecoration: 'none', color: '#FFD700' }} to='/FAQ'>
            FAQ
          </Link>
        </div>
      </nav>
    );
  }
}