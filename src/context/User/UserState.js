import React, { useReducer } from 'react';
import UserContext from './UserContext';
import UserReducer from './UserReducer';
import profile from '../../images/img1.jpg';
const UserState = (props) => {
  const initialState = {
    User: [
      {
        id: 1,
        fname: 'Alice ',
        lname: 'Ndeh',
        email: 'alicendeh16@gmail.com',
        tel: '675979594',
        role: 'Alto',
        post: 'admin',
        pulpitre: 'Dance folks',
        profile: <img src={profile} className='profile-img'></img>,
      },
    ],
  };
  const [state, dispatch] = useReducer(UserReducer, initialState);
  return (
    <UserContext.Provider value={{ User: state.User, post: state.User.post }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;
