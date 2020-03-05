import React, { Component } from 'react';
import { Switch, Route} from 'react-router-dom';
import Home from '../Home';
import ResponsiveDrawer from './Navbar';
import Users from './users';
import Callbacks from './callbacks';
import Questions from './questions';




export default class Admin extends Component {
 
  render() {
    return (
      <div>
        <ResponsiveDrawer/>
        <div className="center">
          <Switch>
            <Route path="/" Component={Home} />
            <Route path="/admin/callbacks" Component={Callbacks} />
            <Route path="/admin/users" Component={Users} />
            <Route path="/admin/questions" Component={Questions} />
          </Switch>
        </div>
      </div>
    )
  }
}

