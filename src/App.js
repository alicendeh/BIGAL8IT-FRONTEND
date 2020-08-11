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
import Home from './component/Home';
import SongState from './context/Song/SongState';

function App() {
  useEffect(() => {
    M.AutoInit();
  });
  return (
    <UserState>
      <SongState>
        <Router>
          <Fragment>
            <Switch>
              <Route path='/user/dashboard' component={UserDashboard} />
              <Route path='/user/profile' component={UserProfile} />
              <Route path='/Sidenav' component={Sidenav} />
              <Route path='/user/edit/profile' component={UserEditProfile} />
              <Route path='/' component={Home} />
            </Switch>
          </Fragment>
        </Router>
      </SongState>
    </UserState>
  );
}

export default App;
