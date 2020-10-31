import React from "react";
import { Switch, Route, BrowserRouter, Link } from "react-router-dom";
import Volunteer from '../Volunteer/Volunteer';
import Dog from '../Dog/Dog';
import Trip from '../Trip/Trip';
import Landing from '../Landing/Landing';
import FAQ from '../Components/FAQ';
import Home from '../Components/Home';

export default class MainRouter extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
        <Link style={{ textDecoration: 'none', color: '#FFD700' }} to='/home'><h1>Happy Paws</h1></Link>
          <Switch>
              <Route exact path='/' component={Landing} />
              <Route exact path='/home' component={Home} />
              <Route path='/volunteer' component={Volunteer} />
              <Route path='/dog' component={Dog} />
              <Route path='/trip' component={Trip} />
              <Route path='/faq' component={FAQ} />
          </Switch>
      </BrowserRouter>
      </div>
    );
  }
}