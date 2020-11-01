import React from "react";
import { Link } from "react-router-dom";

export default function FAQ() {
  return (
    <div>
    <div>
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
  </div>
    <div className='welcome'>
      <div>
        <h2>Frequent Asked Questions:</h2>
        <h3 className='yellow'> 1 - I need to transport a pet. What is the best way to do it?</h3>
        <p>
          "<em>Happy Paws</em> is an app that connects volunteers all over United States that are willing to help transport dogs to the safety of shelters or the destined home."
        </p>
        <h3 className='yellow'> 2 - How can I volunteer?</h3>
        <p>
          "Simply choose from our menu which "Trip" you would like to pick up. You will have to provide with your License Plate and Vehicle Model."
        </p>
        <h3 className='yellow'> 3 - Do I get paid for gas or mileage?</h3>
        <p>
          "No. This is a volunteer work, so no cash involved."
        </p>
        <h3 className='yellow'> 4 - How will I know that the leg before or after mine will get filled?</h3>
        <p>
          "It shows on the map which legs are covered and which are not. Make sure to get one that someone is also covering the path before and/or after you."
        </p>
        <h3 className='yellow'> 5 - Are the volunteers verified?</h3>
        <p>
          "Yes. We do a background check that verifies the drivers."
        </p>
      </div>
    </div>
    </div>
  );
}