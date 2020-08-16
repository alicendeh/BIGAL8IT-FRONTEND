import React from 'react';
import { Link } from 'react-router-dom';
import img3 from '../../images/gg.jpg';
import img2 from '../../images/img1.jpg';

const Sidenav = () => {
  return (
    <div className='sidenav' id='sidenav'>
      <ul id='slide-out' class='sidenav'>
        <li>
          <div class='user-view'>
            <div class=' bkg '>
              <img src={img3} />
            </div>
            <a href='#user'>
              <img class='circle' src={img2} />
            </a>
            <a href='#name'>
              <span class='black-text name'>Alice Ndeh</span>
            </a>
            <a href='#email'>
              <span class='black-text email'>alicendeh16@gmail.com</span>
            </a>
          </div>
        </li>
        <Link to='/users/song/view'>
          <div className='containerc'>
            <h3>
              Les Chants <i class='fas fa-arrow-right'></i>
            </h3>
          </div>
        </Link>
        <div className='containerc'>
          {' '}
          <h3>
            Programme De Messe <i class='fas fa-arrow-right'></i>
          </h3>
        </div>
        <div className='containerc'>
          <h3>
            A propos <i class='fas fa-arrow-right'></i>
          </h3>
        </div>
        <div className='containerc '>
          {' '}
          <h3>
            Quitter <i class='fas fa-arrow-right'></i>
          </h3>
        </div>
        <li>
          <a class='waves-effect' href='#!'>
            Third Link With Waves
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidenav;
