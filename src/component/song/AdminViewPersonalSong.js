import React, { useContext, useEffect } from 'react';
import SongContext from '../../context/Song/SongContext';
import img3 from '../../images/gg.jpg';
import img2 from '../../images/img2.jpg';
import { Link } from 'react-router-dom';

const AdminViewPersonalSong = () => {
  const songContext = useContext(SongContext);
  const { Song, setCurrent } = songContext;
  return (
    <div>
      <nav className='profile-nav'>
        <a href='#sidenav'>
          <i className='fas fa-bars'></i>
        </a>
      </nav>
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
      <a href='#' data-target='slide-out' class='sidenav-trigger show-on-large'>
        <i class='material-icons'>menu</i>
      </a>
      <br />
      <br />
      <form>
        <div class='center row'>
          <div class='col s7 '>
            <div class='row' id='topbarsearch'>
              <div class='input-field col s6 s12 red-text'>
                <i class='red-text material-icons prefix'>search</i>
                <input
                  type='text'
                  placeholder='search'
                  id='autocomplete-input'
                  class='autocomplete red-text'
                />
              </div>
            </div>
          </div>
        </div>
      </form>
      {Song.map((song) => (
        <div className='col s12 m7 main-card-content'>
          <h2 className='header'>{song.title}</h2>
          <div className='card horizontal'>
            <div className='card-stacked'>
              <a href='#adminSongModal' className='modal-trigger'>
                <div className='card-content' onClick={() => setCurrent(song)}>
                  <p>{song.lyrics}</p>
                </div>
              </a>

              <div className='card-action'>{song.author}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AdminViewPersonalSong;
