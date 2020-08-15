import React, { useContext } from 'react';
import AdminContext from '../../context/Admin/AdminContext';
import '../../App.css';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  const adminContext = useContext(AdminContext);
  const { Admin } = adminContext;
  return (
    <div className='user-dashboard'>
      {Admin.map((admin) => (
        <div className='dashboard-frame'>
          <h3 className='profile-img'>{admin.profile}</h3>
          <br />
          <br />
          <Link to='/admin/profile'>
            <div className='container1'>
              {' '}
              <h3 className='main'>
                {admin.fname} {admin.lname} <i class='fas fa-arrow-right'></i>
              </h3>
            </div>
          </Link>
          <Link to='/admin/song/board'>
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
          <div className='containerc'>
            {' '}
            <h3>
              Quitter <i class='fas fa-arrow-right'></i>
            </h3>
          </div>
        </div>
      ))}
      <h3>admin Dashboard</h3>
    </div>
  );
};

export default AdminDashboard;
