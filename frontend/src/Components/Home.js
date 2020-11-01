import React from "react";
import { Link } from "react-router-dom";

export default class Home extends React.Component {
  render(){
    return (
      <nav className='nav'>
        <div className='home'>
          <Link style={{ textDecoration: 'none', color: 'whitesmoke' }} to="/volunteer">
            Volunteers
          </Link>
        </div>
        <div className='home'>
          <Link style={{ textDecoration: 'none', color: 'whitesmoke' }} to="/dog">
            Dogs
          </Link>
        </div>
        <div className='home'>
          <Link style={{ textDecoration: 'none', color: 'whitesmoke' }} to='/trip'>
            Trips
          </Link>
        </div>
        <div className='home'>
          <Link style={{ textDecoration: 'none', color: 'whitesmoke' }} to='/FAQ'>
            FAQ
          </Link>
        </div>
      </nav>
    );
  }
}