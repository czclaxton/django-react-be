import React from 'react';
import Keypad from '../keyPad';
import { connect } from 'react-redux';

const Display = props => {
  const width = props.dummydata.sort((a, b) => {
    return b.x - a.x;
  })[0].x;
  const height = props.dummydata.sort((a, b) => {
    return b.y - a.y;
  })[0].y;
  const grid = [];
  for (let i = 0; i <= height; i++) {
    const row = [];
    for (let j = 0; j < props.dummydata.length; j++) {
      if (props.dummydata[j].y === i) {
        row.push(props.dummydata[j]);
      }
    }
    grid.push(row);
  }

  return (
    <>
      {grid.map(row => (
        <div style={{ height: 22 }}>
          {row.map(cell => {
            let color = '';
            if (cell.type === 'floor') {
              color = 'brown';
            }
            if (cell.type === 'door') {
              color = 'gray';
            }
            if (cell.type === 0) {
              color = 'black';
            }
            if (cell.x === props.character_x && cell.y === props.character_y) {
              color = 'yellow';
            }
            return (
              <div
                style={{
                  backgroundColor: color,
                  width: 22,
                  height: 22,
                  display: 'inline-block'
                }}
              />
            );
          })}
        </div>
      ))}
      <div>
        <Keypad />
      </div>
    </>
  );
};
const mapStateToProps = state => {
  return {
    character_x: state.charactersReducer.character_location_x,
    character_y: state.charactersReducer.character_location_y
  };
};

export default connect(
  mapStateToProps,
  null
)(Display);
