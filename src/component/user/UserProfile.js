import React, { useContext } from 'react';
import UserContext from '../../context/User/UserContext';
import '../../App.css';

const UserProfile = () => {
  const userContext = useContext(UserContext);
  const { User } = userContext;

  return (
    <div>
      <nav className='profile-nav'>
        <i class='fas fa-bars'></i>
        <i class='fas fa-cog'></i>
      </nav>
      {User.map((user) => (
        <div className='user-profile'>
          <h3 className='profile-img2'>{user.profile}</h3>

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
    </div>
  );
};

export default UserProfile;
