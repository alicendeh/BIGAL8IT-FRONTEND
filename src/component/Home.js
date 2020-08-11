import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      Click below to get there
      <br /> <br />
      <Link to='/user/dashboard'>
        <button
          style={{
            color: 'white',
            backgroundColor: 'teal',
            border: '1px solid transparent',
            width: '30%',
            padding: '7px',
            borderRadius: '7px',
          }}
        >
          Click Me
        </button>
      </Link>
    </div>
  );
};

export default Home;
