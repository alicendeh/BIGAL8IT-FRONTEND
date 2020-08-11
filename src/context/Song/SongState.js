import SongReducer from './SongReducer';
import SongContext from './SongContext';
import React, { useReducer } from 'react';
import profile from '../../images/img1.jpg';

const SongState = (props) => {
  const initialState = {
    Song: [
      {
        author: 'Brad Traversy',
        mass: 'mass-A',
        liturgy: 'lit-a',
        lang: 'frnacais',
        type: 'type-a',
        title: 'tit-a',
        lyrics: 'lorem ipsum dolor sit amen dir ascum passiub ',
        profile: <img src={profile} className='profile-img'></img>,
      },
    ],
  };
  const [state, dispatch] = useReducer(SongReducer, initialState);

  return (
    <SongContext.Provider
      value={{
        Song: state.Song,
      }}
    >
      {props.children}
    </SongContext.Provider>
  );
};

export default SongState;
