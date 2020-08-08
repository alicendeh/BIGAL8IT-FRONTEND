import React, { Fragment } from 'react';
import './App.css';
import UserState from './context/User/UserState';
import UserDashboard from './component/user/UserDashboard';

function App() {
  return (
    <UserState>
      <Fragment>
        <UserDashboard />
      </Fragment>
    </UserState>
  );
}

export default App;
