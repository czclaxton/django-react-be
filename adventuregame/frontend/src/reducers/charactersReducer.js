import * as types from "../actions/types";

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
    case types.GET_CHARACTERS_REQUEST:
      return {
        ...state,
        characters: action.payload
      };
    default:
      return state;
  }
};
