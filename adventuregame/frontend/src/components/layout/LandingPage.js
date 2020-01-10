import React, { useEffect } from "react";
import PropTypes from "prop-types";

import Display from "./Display/Display";
// import { useSelector, useDispatch } from "react-redux";
// import { getCharacters } from "../../actions/cells";
import dummydata from "./dummydata";




const LandingPage = () => {
  // const cells = useSelector(state => state.cellsReducer.cells);
  // const characters = useSelector(state => state.charactersReducer.characters);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   getCells();
  // }, []);
  return (
    <>
      <h1>ADVENTURE GAME</h1>
    <Display dummydata={dummydata} />


    </>
  );
};

LandingPage.propTypes = {
  cells: PropTypes.array.isRequired
};

export default LandingPage;
