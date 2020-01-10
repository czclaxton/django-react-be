import React from 'react';
import { connect } from 'react-redux';
import { updateCharacter } from '../../actions/characters';
import dummydata from './dummydata';

const Keypad = props => {
  console.log('X', props.character_x);
  const testCell = (y, x) => {
    const cell = dummydata.find( (d) => d.x === x && d.y === y)
    return cell && cell.type !== 0
  }
  return (
    <div>
      <button
    onClick={() =>
          testCell(props.character_y - 1, props.character_x)
          &&
          props.uc(props.id, props.character_x, props.character_y - 1)
        }
      >
        N
      </button>
      <button
        onClick={() =>
          testCell(props.character_y + 1, props.character_x) &&
          props.uc(props.id, props.character_x, props.character_y + 1)
        }
      >
        S
      </button>
      <button
        onClick={() =>
          testCell(props.character_y, props.character_x - 1)  &&
          props.uc(props.id, props.character_x - 1, props.character_y)
        }
      >
        E
      </button>
      <button
        onClick={() =>
          testCell(props.character_y, props.character_x + 1)  &&
          props.uc(props.id, props.character_x + 1, props.character_y)
        }
      >
        W
      </button>

    </div>
  );
};

const mapStateToProps = state => {
  return {
    character_x: state.charactersReducer.character_location_x,
    character_y: state.charactersReducer.character_location_y,
    id: state.charactersReducer.id
  };
};

export default connect(
  mapStateToProps,
  { uc: updateCharacter }
)(Keypad);
