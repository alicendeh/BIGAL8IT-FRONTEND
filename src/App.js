import React, { Fragment } from 'react';
import './App.css';
import UserState from './context/User/UserState';
import UserDashboard from './component/user/UserDashboard';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import UserProfile from './component/user/UserProfile';
import Sidenav from './component/user/Sidenav';

function App() {
  return (
    <UserState>
      <Router>
        <Fragment>
          <Switch>
            <Route path='/user/dashboard' component={UserDashboard} />
            <Route path='/user/profile' component={UserProfile} />
            <Route path='/Sidenav' component={Sidenav} />
          </Switch>
        </Fragment>
      </Router>
    </UserState>
  );
}

export default App;
