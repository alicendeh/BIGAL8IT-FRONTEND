import SongReducer from './SongReducer';
import SongContext from './SongContext';
import React, { useReducer } from 'react';

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
