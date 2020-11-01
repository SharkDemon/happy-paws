import React from 'react';
import Dog from './Dog';
import BASE_URL from '../config';

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
        <h1>Dogs</h1>
        {this.state.pets.map((pet) => <Dog pet={pet} key={pet.id}/>)}
      </div>
    );
    
  }

}