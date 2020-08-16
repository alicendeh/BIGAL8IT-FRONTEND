import React, { useContext, useEffect, useState } from 'react';
import SongContext from '../../context/Song/SongContext';

const AdminViewSongModal = () => {
  const songContext = useContext(SongContext);
  const { Song, current } = songContext;
  const [song, setSong] = useState({
    author: '',
    mass: '',
    title: '',
    liturgy: '',
    lang: '',
    type: '',
    lyrics: '',
    profile: '',
  });
  const { author, title, lyrics } = song;
  const onChange = (e) => {
    setSong({ ...song, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    if (current != null) {
      setSong(current);
    } else {
      setSong({
        author: '',
        mass: '',
        title: '',
        liturgy: '',
        lang: '',
        type: '',
        lyrics: '',
        profile: '',
      });
    }
  }, [current, songContext]);
  return (
    <div>
      {Song.map((song) => (
        <div id='adminSongModal' className='modal modal-pop-up' key={song.id}>
          <div className='modal-content'>
            <h4 onChange={onChange} value={title} name='title'>
              {title}{' '}
            </h4>
            <h4
              onChange={onChange}
              value={author}
              name='author'
              className='author'
            >
              {author}{' '}
            </h4>

            <p
              onChange={onChange}
              value={lyrics}
              name='lyrics'
              className='song-content'
            >
              {lyrics}{' '}
            </p>
          </div>
          <div className='modal-footer'>
            <a
              href='#!'
              className='modal-close waves-effect waves-green btn-flat'
            >
              Agree
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AdminViewSongModal;
