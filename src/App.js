import React, { Fragment, useEffect } from 'react';
import './App.css';
import UserState from './context/User/UserState';
import UserDashboard from './component/user/UserDashboard';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import UserProfile from './component/user/UserProfile';
import Sidenav from './component/user/Sidenav';
import UserEditProfile from './component/user/UserEditProfile';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

function App() {
  useEffect(() => {
    M.AutoInit();
  });
  return (
    <UserState>
      <Router>
        <Fragment>
          <Switch>
            <Route path='/user/dashboard' component={UserDashboard} />
            <Route path='/user/profile' component={UserProfile} />
            <Route path='/Sidenav' component={Sidenav} />
            <Route path='/user/edit/profile' component={UserEditProfile} />
          </Switch>
        </Fragment>
      </Router>
    </UserState>
  );
}

export default App;
