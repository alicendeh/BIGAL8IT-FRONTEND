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
        <h3>
          {song.author} {song.mass}{' '}
        </h3>
      ))}
    </div>
  );
};

export default UserViewSong;
