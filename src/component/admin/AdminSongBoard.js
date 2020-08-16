import React from 'react';
import AddBtn from './AddBtn';
import AdminViewPersonalSong from '../song/AdminViewPersonalSong';

const AdminSongBoard = () => {
  return (
    <div>
      <AdminViewPersonalSong />
      <AddBtn />
    </div>
  );
};

export default AdminSongBoard;
