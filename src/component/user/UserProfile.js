import React, { useContext, useState } from 'react';
import UserContext from '../../context/User/UserContext';
import '../../App.css';
import { Link } from 'react-router-dom';
import Sidenav from './Sidenav';

const UserProfile = () => {
  const userContext = useContext(UserContext);
  const { User } = userContext;

  const [sidenav, setSidenav] = useState({ val: 0 });
  const { val } = sidenav;

  const funct = () => {
    setSidenav({ val: 1 });
  };
  return (
    <div>
      <nav className='profile-nav'>
        <a href='#sidenav' onClick={funct} style={{}}>
          <i class='fas fa-bars'></i>
        </a>
        <i class='fas fa-cog'></i>
      </nav>
      {User.map((user) => (
        <div className='user-profile'>
          <h3 className='profile-img2'>{user.profile}</h3>
          <h3 className='name-field'>
            {user.fname} {user.lname}{' '}
          </h3>
          <div className='profile-elem'>
            <div>
              <i class='fas fa-envelope'></i>
            </div>
            <div>
              <h3>Email</h3>
              <h3>{user.email}</h3>
            </div>
          </div>

          <div className='profile-elem'>
            <div>
              <i class='fas fa-phone'></i>
            </div>
            <div>
              <h3>Telephone</h3>
              <h3>{user.tel}</h3>
            </div>
          </div>

          <div className='profile-elem'>
            <div>
              <i class='fas fa-music'></i>
            </div>
            <div>
              <h3>Role</h3>
              <h3>{user.role}</h3>
            </div>
          </div>

          <div className='profile-elem'>
            <div>
              <i class='fas fa-bookmark'></i>
            </div>
            <div>
              <h3>Pulpitre</h3>
              <h3>{user.pulpitre}</h3>
            </div>
          </div>
        </div>
      ))}

      <div className='sidenav' id='sidenav' style={{ display: 'none' }}>
        <Sidenav />
      </div>
    </div>
  );
};

export default UserProfile;
