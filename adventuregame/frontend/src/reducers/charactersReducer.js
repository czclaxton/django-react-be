import * as types from '../actions/types';

const initialState = {
  character_location_x: 0,
  character_location_y: 0
};

export const charactersReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_CHARACTER_SUCCESS:
    case types.CREATE_CHARACTER_SUCCESS:
    case types.GET_CHARACTER_SUCCESS:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};
