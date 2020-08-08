import React, { useContext } from 'react';
import UserContext from '../../context/User/UserContext';
import '../../App.css';

const UserDashboard = () => {
  const userContext = useContext(UserContext);
  const { User } = userContext;
  return (
    <div className='user-dashboard'>
      {User.map((user) => (
        <div className='dashboard-frame'>
          <h3 className='profile-img'>{user.profile}</h3>
          <br />
          <br />
          <div className='container1'>
            {' '}
            <h3 className='main'>
              {user.fname} {user.lname} <i class='fas fa-arrow-right'></i>
            </h3>
          </div>
          <div className='container'>
            <h3>
              Les Chants <i class='fas fa-arrow-right'></i>
            </h3>
          </div>
          <div className='container'>
            {' '}
            <h3>
              Programme De Messe <i class='fas fa-arrow-right'></i>
            </h3>
          </div>
          <div className='container'>
            <h3>
              A propos <i class='fas fa-arrow-right'></i>
            </h3>
          </div>
          <div className='container'>
            {' '}
            <h3>
              Quitter <i class='fas fa-arrow-right'></i>
            </h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserDashboard;
