import React from 'react';
import Volunteer from './Volunteer';
import BASE_URL from '../config';

export default class VolunteerList extends React.Component {
  state = {
    volunteer: [],
    error: false, 
  };

  componentDidMount() {

    fetch(`${BASE_URL}/api/volunteers`)
      .then(res => res.json())
      .then(data => {
        //   console.log("response data=" + JSON.stringify(data));
          this.setState({ volunteer: data });
        })
      .catch(error => {
          this.setState({ error: true });
      })

  }

  render() {
    return( 
      <div>
        <h1>Volunteer Drivers</h1>
        {this.state.volunteer.map((vol) => <Volunteer volunteer={vol} key={vol.id}/>)}
      </div>
    );
  }

}