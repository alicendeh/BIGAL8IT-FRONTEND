import React, { useContext } from 'react';
import SongContext from '../../context/Song/SongContext';

const UserViewSong = () => {
  const songContext = useContext(SongContext);
  const { Song } = songContext;
  return (
    <div>
      <nav className='profile-nav'>
        <a href='#sidenav'>
          <i class='fas fa-bars'></i>
        </a>
      </nav>
      <br />
      <br />

      {Song.map((song) => (
        <div key={song.id}>
          <div class='col s12 m7 main-card-content'>
            <h2 class='header'>{song.title}</h2>
            <div class='card horizontal'>
              <div class='card-image'>{song.profile}</div>
              <div class='card-stacked'>
                <a href='#songModal' class='modal-trigger'>
                  <div class='card-content'>
                    <p>{song.lyrics}</p>
                  </div>
                </a>

                <div class='card-action'>{song.author}</div>
              </div>
            </div>
          </div>

          <div id='songModal' class='modal modal-pop-up'>
            <div class='modal-content'>
              <h4>{song.title}</h4>
              <h4 className='author'>{song.author} </h4>
              <p> {song.lyrics} </p>
            </div>
            <div class='modal-footer'>
              <a
                href='#!'
                class='modal-close waves-effect waves-green btn-flat'
              >
                Agree
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserViewSong;
