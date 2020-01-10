import axios from 'axios';

import * as actionTypes from './cells';
import {
  GET_CHARACTER,
  CREATE_CHARACTER,
  UPDATE_CHARACTER,
  GET_CHARACTER_SUCCESS,
  CREATE_CHARACTER_SUCCESS,
  UPDATE_CHARACTER_SUCCESS,
  GET_CHARACTER_FAILURE,
  MOVE_CHARACTER,
  MOVE_CHARACTER_SUCCESS
} from './types.js';
import axiosWithAuth from '../utilities/axiosWithAuth';

export const getCharacter = user => {
  return dispatch => {
    dispatch({ type: GET_CHARACTER });
    return axios
      .get('api/characters/')
      .then(res => {
        const character = res.data.find(c => {
          return c.owner === user.id;
        });
        if (character === undefined) {
          dispatch({ type: GET_CHARACTER_FAILURE, payload: res.data });
          return undefined;
        }

        dispatch({ type: GET_CHARACTER_SUCCESS, payload: character });
        return res.data;
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const createCharacter = data => {
  return dispatch => {
    dispatch({ type: CREATE_CHARACTER });
    return axios
      .post('api/characters/', data)
      .then(res => {
        // dispatch({ type: CREATE_CHARACTER_SUCCESS, payload: res.data });
        return getCharacter({ id: data.user_id })(dispatch);
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const updateCharacter = (id, x, y) => {
  const data = {character_location_x: x, character_location_y: y}
  return dispatch => {
    dispatch({ type: UPDATE_CHARACTER });
    return axios
      .put(`api/characters/${id}/`, data)
      .then(res => {
        dispatch({ type: UPDATE_CHARACTER_SUCCESS, payload: res.data });
        return res.data;
      })
      .catch(err => {
        console.log(err);
      });
  };
};

// export const moveCharacter = direction => {
//   console.log(direction)
//     return dispatch => {
//     dispatch({ type: MOVE_CHARACTER });
//     return axios
//       .post('api/characters/mover', direction)
//       .then(res => {
//         dispatch({ tpye: MOVE_CHARACTER_SUCCESS, playload: res.data });
//       })
//       .catch(err => {
//         console.log(err);
//       });
//   };
// };
