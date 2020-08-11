import React, { useContext } from 'react';
import UserContext from '../../context/User/UserContext';
import '../../App.css';
import { Link } from 'react-router-dom';

const UserEditProfile = () => {
  const userContext = useContext(UserContext);
  const { User } = userContext;
  return (
    <div>
      <nav className='profile-nav'>
        <a href='#sidenav'>
          <i class='fas fa-bars'></i>
        </a>
      </nav>
      {User.map((user) => (
        <div className='user-profile-edit'>
          <div class='row profile-edit'>
            <form class='col s11'>
              <div class='row'>
                <div class='input-field col s6'>
                  <input
                    placeholder={user.fname}
                    id='first_name'
                    type='text'
                    class='validate'
                  />
                  <label
                    for='first_name'
                    className='blue-text darken-3 label'
                    id='label'
                  >
                    First Name
                  </label>
                </div>
                <div class='input-field col s6'>
                  <input
                    id='last_name'
                    type='text'
                    class='validate'
                    placeholder={user.lname}
                  />
                  <label
                    for='last_name'
                    className='blue-text lighten-3'
                    id='label'
                  >
                    Last Name
                  </label>
                </div>
              </div>

              <div class='row'>
                <div class='input-field col s12'>
                  <input
                    id='email'
                    type='email'
                    class='validate'
                    placeholder={user.email}
                  />
                  <label for='email' className='blue-text lighten-3' id='label'>
                    Email
                  </label>
                </div>
              </div>
              <div class='row'>
                <div class='input-field col s6'>
                  <input
                    placeholder='Placeholder'
                    id='tel'
                    type='text'
                    class='validate'
                    placeholder={user.tel}
                  />
                  <label for='tel' className='blue-text lighten-3' id='label'>
                    Telephone
                  </label>
                </div>
                <div class='input-field col s6'>
                  <input
                    id='role'
                    type='text'
                    class='validate'
                    placeholder={user.role}
                  />
                  <label for='role' className='blue-text lighten-3' id='label'>
                    Role
                  </label>
                </div>
              </div>
              <div class='input-field col s12'>
                <input
                  id='pulpitre'
                  type='text'
                  class='validate'
                  placeholder={user.pulpitre}
                />
                <label
                  className='blue-text lighten-3'
                  for='pulpitre '
                  id='label'
                >
                  Pulpitre
                </label>
              </div>
            </form>
          </div>
          <button>Update Profile</button>
        </div>
      ))}
    </div>
  );
};

export default UserEditProfile;
