import React, { useEffect } from "react";
import PropTypes from "prop-types";

import Display from "./Display/Display";
import { useSelector, useDispatch } from "react-redux";
import { getCells, getCharacters } from "../../actions/cells";

export const LandingPage = () => {
  const cells = useSelector(state => state.cellsReducer.cells);
  const characters = useSelector(state => state.charactersReducer.characters);
  const dispatch = useDispatch();

  useEffect(() => {
    getCells();
  }, []);
  return (
    <>
      <h1>LANDINGPAGE</h1>
      <Display />
    </>
  );
};

LandingPage.propTypes = {
  cells: PropTypes.array.isRequired
};
