import React, { useContext } from 'react';
import UserContext from '../../context/User/UserContext';

const UserDashboard = () => {
  const userContext = useContext(UserContext);
  const { User } = userContext;
  return (
    <div>
      {User.map((user) => (
        <h3>{user.profile}</h3>
      ))}
    </div>
  );
};

export default UserDashboard;
