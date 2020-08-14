import React, { useContext, useState } from 'react';
import AdminContext from '../../context/Admin/AdminContext';
import '../../App.css';
import { Link } from 'react-router-dom';

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
