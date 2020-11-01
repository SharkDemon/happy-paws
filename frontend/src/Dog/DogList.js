import React from 'react';
import Dog from './Dog';
import BASE_URL from '../config';
import { Link } from "react-router-dom";

export default class DogList extends React.Component {
  state = {
    pets: [],
    error: false, 
  };

  componentDidMount() {

    fetch(`${BASE_URL}/api/pets`)
      .then(res => res.json())
      .then(data => {
          // console.log("response data=" + JSON.stringify(data));
          this.setState({ pets: data });
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
        <h1>Dogs</h1>
        {this.state.pets.map((pet) => <Dog pet={pet} key={pet.id}/>)}
      </div>
    );
    
  }

}