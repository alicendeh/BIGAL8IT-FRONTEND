import React, { useContext } from 'react';
import SongContext from '../../context/Song/SongContext';

const UserViewSong = () => {
  const songContext = useContext(SongContext);
  const { Song, setCurrent } = songContext;
  return (
    <div>
      <nav className='profile-nav'>
        <a href='#sidenav'>
          <i className='fas fa-bars'></i>
        </a>
      </nav>
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
        <div key={song.id}>
          <div className='col s12 m7 main-card-content'>
            <h2 className='header'>{song.title}</h2>
            <div className='card horizontal'>
              <a href='#profileModal' className='modal-trigger'>
                <div className='card-image' onClick={() => setCurrent(song)}>
                  {song.profile}
                </div>
              </a>
              <div className='card-stacked'>
                <a href='#songModal' className='modal-trigger'>
                  <div
                    className='card-content'
                    onClick={() => setCurrent(song)}
                  >
                    <p>{song.lyrics}</p>
                  </div>
                </a>

                <div className='card-action'>{song.author}</div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserViewSong;
