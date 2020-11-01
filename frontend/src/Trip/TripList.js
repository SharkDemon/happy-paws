import React from 'react';
import Trip from './Trip';
import BASE_URL from '../config';

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
            <h1>Trips</h1>
            {this.state.trip.map((trip) => <Trip trips={trip} key={trip.id}/>)}
        </div>
    );
  }

}