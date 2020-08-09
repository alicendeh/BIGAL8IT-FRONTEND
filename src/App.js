import React, { Fragment } from 'react';
import './App.css';
import UserState from './context/User/UserState';
import UserDashboard from './component/user/UserDashboard';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import UserProfile from './component/user/UserProfile';

function App() {
  return (
    <UserState>
      <Router>
        <Fragment>
          <Switch>
            <Route path='/user/dashboard' component={UserDashboard} />
            <Route path='/user/profile' component={UserProfile} />
          </Switch>
        </Fragment>
      </Router>
    </UserState>
  );
}

export default App;
