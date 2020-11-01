import React from "react";
import { Switch, Route, BrowserRouter, Link } from "react-router-dom";
import VolunteerList from '../Volunteer/VolunteerList';
import TripList from '../Trip/TripList';
import Landing from '../Landing/Landing';
import FAQ from '../Components/FAQ';
import Home from '../Components/Home';
import DogList from "../Dog/DogList";

export default class MainRouter extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
        <Link to='/'><h1 className='title'>Happy Paws</h1></Link>
          <Switch>
              <Route exact path='/' component={Landing} />
              <Route exact path='/home' component={Home} />
              <Route path='/volunteer' component={VolunteerList} />
              <Route path='/dog' component={DogList} />
              <Route path='/trip' component={TripList} />
              <Route path='/faq' component={FAQ} />
          </Switch>
      </BrowserRouter>
      </div>
    );
  }
}