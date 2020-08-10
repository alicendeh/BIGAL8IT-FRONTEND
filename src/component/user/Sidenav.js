import React from 'react';
import { Link } from 'react-router-dom';

const Sidenav = () => {
  return (
    <div className='sidenav' id='sidenav'>
      <Link to=''>
        <h3>Dashboard</h3>
      </Link>
      <Link to=''>
        <h3>Les Chants</h3>
      </Link>
      <Link to=''>
        <h3>Programme De Messe</h3>
      </Link>
      <Link to=''>
        <h3>APropos</h3>
      </Link>
      <Link to=''>
        <h3>Quitter</h3>
      </Link>
    </div>
  );
};

export default Sidenav;
