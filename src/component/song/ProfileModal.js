import React, { useContext, useEffect, useState } from 'react';
import SongContext from '../../context/Song/SongContext';

const ProfileModal = () => {
  const songContext = useContext(SongContext);
  const { Song, current } = songContext;
  const [userprofile, setuserprofile] = useState({
    author: '',
    mass: '',
    title: '',
    liturgy: '',
    lang: '',
    type: '',
    lyrics: '',
    profile: '',
  });
  const { author, title, lyrics, profile } = userprofile;
  const onChange = (e) => {
    setuserprofile({ ...userprofile, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    if (current != null) {
      setuserprofile(current);
    } else {
      setuserprofile({
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
        <div id='profileModal' className='modal modal-pop-up' key={song.id}>
          <div className='modal-content'>
            <p onChange={onChange} value={profile} name='profile'>
              {profile}{' '}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProfileModal;
