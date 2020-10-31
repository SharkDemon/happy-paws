import React from "react";
import { Switch, Route } from "react-router-dom";
import Volunteer from '../Volunteer/Volunteer';
import Dog from '../Dog/Dog';
import Trip from '../Trip/Trip';
import Landing from '../Landing/Landing';

export default function MainRouter() {
  return (
    <div>
    <Switch>
        <Route exact path='/' component={Landing} />
        <Route path='/volunteer' component={Volunteer} />
        <Route path='/dog' component={Dog} />
        <Route path='/trip' component={Trip} />
    </Switch>
    </div>
  );
}