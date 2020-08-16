import React, { useContext } from 'react';
import UserContext from '../../context/User/UserContext';
import '../../App.css';
import { Link } from 'react-router-dom';
import img3 from '../../images/gg.jpg';
import img2 from '../../images/img1.jpg';
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
      <ul id='slide-out' class='sidenav'>
        <li>
          <div class='user-view'>
            <div class=' bkg '>
              <img src={img3} />
            </div>
            <a href='#user'>
              <img class='circle' src={img2} />
            </a>
            <a href='#name'>
              <span class='black-text name'>Alice Ndeh</span>
            </a>
            <a href='#email'>
              <span class='black-text email'>alicendeh16@gmail.com</span>
            </a>
          </div>
        </li>
        <Link to='/users/song/view'>
          <div className='containerc'>
            <h3>
              Les Chants <i class='fas fa-arrow-right'></i>
            </h3>
          </div>
        </Link>
        <div className='containerc'>
          {' '}
          <h3>
            Programme De Messe <i class='fas fa-arrow-right'></i>
          </h3>
        </div>
        <div className='containerc'>
          <h3>
            A propos <i class='fas fa-arrow-right'></i>
          </h3>
        </div>
        <div className='containerc '>
          {' '}
          <h3>
            Quitter <i class='fas fa-arrow-right'></i>
          </h3>
        </div>
        <li>
          <a class='waves-effect' href='#!'>
            Third Link With Waves
          </a>
        </li>
      </ul>
      <a href='#' data-target='slide-out' class='sidenav-trigger show-on-large'>
        <i class='material-icons'>menu</i>
      </a>
      {User.map((user) => (
        <div className='user-profile-edit'>
          <div class='row profile-edit'>
            <form class='col s10'>
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

export default UserEditProfile;
