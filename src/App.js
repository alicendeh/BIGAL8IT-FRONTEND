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
import UserViewSong from './component/song/UserViewSong';
import AddModal from './component/song/UserViewSongModal';
import ProfileModal from './component/song/ProfileModal';
import AdminState from './context/Admin/AdminState';
import AdminDashboard from './component/admin/AdminDashboard';
import AdminEditProfile from './component/admin/AdminEditProfile';
import AdminProfile from './component/admin/AdminProfile';
import DashboardRender from './RenderUIBasedOnRole/DashboardRender';
import AdminSongBoard from './component/admin/AdminSongBoard';
import AdminViewSongModal from './component/song/AdminViewSongModal';
import AdminAddSongModal from './component/song/AdminAddSongModal';

function App() {
  useEffect(() => {
    M.AutoInit();
  });
  return (
    <UserState>
      <SongState>
        <AdminState>
          <Router>
            <Fragment>
              <Switch>
                <Route path='/user/dashboard' component={UserDashboard} exact />
                <Route
                  path='/admin/dashboard'
                  component={AdminDashboard}
                  exact
                />
                <Route path='/user/profile' component={UserProfile} exact />
                <Route path='/admin/profile' component={AdminProfile} exact />

                <Route
                  path='/user/edit/profile'
                  component={UserEditProfile}
                  exact
                />
                <Route
                  path='/admin/edit/profile'
                  component={AdminEditProfile}
                  exact
                />
                <Route path='/' component={Home} exact />
                <Route path='/render' component={DashboardRender} exact />
                <Route path='/users/song/view' component={UserViewSong} exact />

                <Route
                  path='/admin/song/board'
                  component={AdminSongBoard}
                  exact
                />
              </Switch>
              <AddModal />
              <ProfileModal />
              <AdminViewSongModal />
              <AdminAddSongModal />
            </Fragment>
          </Router>
        </AdminState>
      </SongState>
    </UserState>
  );
}

export default App;
