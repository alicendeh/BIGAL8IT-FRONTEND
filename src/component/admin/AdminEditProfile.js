import React, { useContext } from 'react';
import AdminContext from '../../context/Admin/AdminContext';
import '../../App.css';
import { Link } from 'react-router-dom';

const AdminEditProfile = () => {
  const adminContext = useContext(AdminContext);
  const { Admin } = adminContext;
  return (
    <div>
      <nav className='profile-nav'>
        <a href='#sidenav'>
          <i class='fas fa-bars'></i>
        </a>
      </nav>
      {Admin.map((admin) => (
        <div className='user-profile-edit'>
          <div class='row profile-edit'>
            <form class='col s10'>
              <div class='row'>
                <div class='input-field col s6'>
                  <input
                    placeholder={admin.fname}
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
                    placeholder={admin.lname}
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
                    placeholder={admin.email}
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
                    placeholder={admin.tel}
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
                    placeholder={admin.role}
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
                  placeholder={admin.pulpitre}
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
          <div className='btnProfile'>
            {' '}
            <input
              type='submit'
              value='Update Profile'
              className='profile-btn'
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default AdminEditProfile;
