import { GET_CHARACTERS } from "../actions/types.js";

const initialState = {
  characters: {
    username: "",
    password: "",
    character_location_x: 0,
    character_location_y: 0
  }
};

export const charactersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CHARACTERS:
      return {
        ...state,
        characters: action.payload
      };
    default:
      return state;
  }
};
