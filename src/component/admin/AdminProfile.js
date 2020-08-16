import React, { useContext, useState } from 'react';
import AdminContext from '../../context/Admin/AdminContext';
import '../../App.css';
import { Link } from 'react-router-dom';
import img3 from '../../images/gg.jpg';
import img2 from '../../images/img2.jpg';

const AdminProfile = () => {
  const adminContext = useContext(AdminContext);
  const { Admin } = adminContext;

  return (
    <div>
      <nav className='profile-nav'>
        <a href='#'>
          <i class='fas fa-bars'></i>
        </a>
        <Link to='/admin/edit/profile'>
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
          <div className='containerc cont'>
            <h3>
              Les Chants <i class='fas fa-arrow-right'></i>
            </h3>
          </div>
        </Link>
        <div className='containerc cont'>
          {' '}
          <h3>
            Programme De Messe <i class='fas fa-arrow-right'></i>
          </h3>
        </div>
        <div className='containerc cont'>
          <h3>
            A propos <i class='fas fa-arrow-right'></i>
          </h3>
        </div>
        <div className='containerc cont '>
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
      {Admin.map((admin) => (
        <div className='user-profile'>
          <h3 className='profile-img2'>{admin.profile}</h3>
          <h3 className='name-field'>
            {admin.fname} {admin.lname}{' '}
          </h3>
          <div className='profile-elem'>
            <div>
              <i class='fas fa-envelope'></i>
            </div>
            <div className='side-cont'>
              <h3>Email</h3>
              <h3>{admin.email}</h3>
            </div>
          </div>

          <div className='profile-elem'>
            <div>
              <i class='fas fa-phone'></i>
            </div>
            <div>
              <h3>Telephone</h3>
              <h3>{admin.tel}</h3>
            </div>
          </div>

          <div className='profile-elem'>
            <div>
              <i class='fas fa-music'></i>
            </div>
            <div>
              <h3>Role</h3>
              <h3>{admin.role}</h3>
            </div>
          </div>

          <div className='profile-elem'>
            <div>
              <i class='fas fa-bookmark'></i>
            </div>
            <div>
              <h3>Pulpitre</h3>
              <h3>{admin.pulpitre}</h3>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AdminProfile;
