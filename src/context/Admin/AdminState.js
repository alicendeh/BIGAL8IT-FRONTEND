import React, { useReducer } from 'react';
import AdminContext from './AdminContext';
import AdminReducer from './AdminReducer';
import profile from '../../images/img1.jpg';
import adminProfile from '../../images/img2.jpg';

const AdminState = (props) => {
  const initialState = {
    Admin: [
      {
        id: 1,
        fname: 'Oben',
        lname: 'Desmond',
        email: 'des125@gmail.com',
        tel: '699803277',
        role: ' Soprano',
        post: 'admin',
        pulpitre: 'Dancing monkeys',
        profile: <img src={adminProfile} className='profile-img'></img>,
      },
    ],
  };
  const [state, dispatch] = useReducer(AdminReducer, initialState);
  return (
    <AdminContext.Provider value={{ Admin: state.Admin }}>
      {props.children}
    </AdminContext.Provider>
  );
};

export default AdminState;
