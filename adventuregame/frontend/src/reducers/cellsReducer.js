// import { GET_CELLS } from "../actions/types.js";

const initialState = {
  //   cells: [
  //     {
  //       cell_type: "",
  //       opacity: 0,
  //       cell_id: 0,
  //       cell_location_x: 0,
  //       cell_location_y: 0
  //     }
  //   ]
  cells: [{}]
};

export const cellsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CELLS:
      return {
        ...state,
        cells: action.payload
      };
    default:
      return state;
  }
};
