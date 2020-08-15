import React from 'react';
import { Link } from 'react-router-dom';

const AdminSongBoard = () => {
  return (
    <div className='fixed-action-btn'>
      <a
        href='#add-log-modal'
        className='btn-floating btn-large  darken-2 modal-trigger'
      >
        <i className='large material-icons red darken-2 white-text'>add</i>
      </a>
      <ul>
        <li>
          <a
            href='#tech-list-modal'
            className='btn-floating green modal-trigger'
          >
            <Link to='/users/song/view' style={{ backgroundColor: 'green' }}>
              <i className='material-icons green'>person</i>
            </Link>{' '}
          </a>
        </li>

        <li>
          <a href='#' className='btn-floating red '>
            <i className='material-icons teal'>person_add</i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default AdminSongBoard;
