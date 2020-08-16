import React, { useContext, useState } from 'react';
import UserContext from '../../context/User/UserContext';
import '../../App.css';
import { Link } from 'react-router-dom';
import Sidenav from './Sidenav';
import img3 from '../../images/gg.jpg';
import img2 from '../../images/img1.jpg';

const UserProfile = () => {
  const userContext = useContext(UserContext);
  const { User } = userContext;

  return (
    <div>
      <nav className='profile-nav'>
        <a href='#sidenav'>
          <i class='fas fa-bars'></i>
        </a>
        <Link to='/user/edit/profile'>
          <i class='fas fa-cog'></i>
        </Link>
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
        <div className='user-profile'>
          <h3 className='profile-img2'>{user.profile}</h3>
          <h3 className='name-field'>
            {user.fname} {user.lname}{' '}
          </h3>
          <div className='profile-elem'>
            <div>
              <i class='fas fa-envelope'></i>
            </div>
            <div className='side-cont'>
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
