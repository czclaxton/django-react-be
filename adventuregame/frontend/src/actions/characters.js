import axios from "axios";

import * as actionTypes from "./cells";

// GET CHARACTERS
export const getCharacter = username => async dispatch => {
  axios
    .get("/api/characters/")
    .then(res => {
      dispatch({
        type: actionTypes.GET_CHARACTERS,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};
