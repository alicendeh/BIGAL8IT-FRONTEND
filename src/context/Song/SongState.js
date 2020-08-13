import SongReducer from './SongReducer';
import SongContext from './SongContext';
import React, { useReducer } from 'react';
import profile from '../../images/img1.jpg';

const SongState = (props) => {
  const initialState = {
    Song: [
      {
        id: 1,
        author: 'Brad Traversy',
        mass: 'mass-A',
        liturgy: 'lit-a',
        lang: 'frnacais',
        type: 'type-a',
        title: 'praise and harmony',
        lyrics:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit Aliquam laboriosam architecto excepturi ipsa corporis       saepe id ad magni, enim ullam?Lorem ipsum dolor sit amet consectetur adipisicing elit Aliquam laboriosam architecto excepturi ipsa corporis       saepe id ad magni, enim ullam?Lorem ipsum dolor sit amet consectetur adipisicing elit Aliquam laboriosam architecto excepturi ipsa corporis       saepe id ad magni, enim ullam?Lorem ipsum dolor sit amet consectetur adipisicing elit Aliquam laboriosam architecto excepturi ipsa corporis       saepe id ad magni, enim ullam?',
        profile: <img src='https://lorempixel.com/100/190/nature/3'></img>,
      },
      {
        id: 2,
        author: 'Steve Fah',
        mass: 'mass-A',
        liturgy: 'lit-a',
        lang: 'frnacais',
        type: 'type-a',
        title: 'God is good',
        lyrics: 'SNA ',
        profile: <img src='https://lorempixel.com/100/190/nature/9'></img>,
      },
      {
        id: 3,
        author: 'Ben Award',
        mass: 'mass-A',
        liturgy: 'lit-a',
        lang: 'frnacais',
        type: 'type-a',
        title: 'Wisdom of the  wise',
        lyrics: 'lorem ipsum dolor sit  amen dir ascum passiub  tdd',
        profile: <img src='https://lorempixel.com/100/190/nature/1'></img>,
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
