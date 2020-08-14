import React, { useContext } from 'react';
import AdminDashboard from '../component/admin/AdminDashboard';
import UserDashboard from '../component/user/UserDashboard';
import UserContext from '../context/User/UserContext';

const DashboardRender = () => {
  const { User } = useContext(UserContext);

  return (
    <div>
      {User.map((user) => (
        <h4>{user.post === 'user' ? <UserDashboard /> : <AdminDashboard />}</h4>
      ))}
    </div>
  );
};

export default DashboardRender;
