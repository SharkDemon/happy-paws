import React from 'react';
import Trip from './Trip';
import BASE_URL from '../config';
import { Link } from "react-router-dom";

export default class TripList extends React.Component {
  state = {
    trip: [],
    error: false, 
  };

  componentDidMount() {

    fetch(`${BASE_URL}/api/trips`)
      .then(res => res.json())
      .then(data => {
          // console.log("response data=" + JSON.stringify(data));
          this.setState({ trip: data });
        })
      .catch(error => {
          this.setState({ error: true });
      })

  }

  render() {
    return(
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
            <h1>Trips</h1>
            {this.state.trip.map((trip) => <Trip trips={trip} key={trip.id}/>)}
        </div>
    );
  }

}