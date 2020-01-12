import React from "react";
import { connect } from "react-redux";
import { updateCharacter } from "../../actions/characters";
import dummydata from "./dummydata";

const Keypad = props => {
  console.log("X", props.character_x);
  const testCell = (y, x) => {
    const cell = dummydata.find(d => d.x === x && d.y === y);
    return cell && cell.type !== 0;
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "170px",
        alignItems: "center"
      }}
    >
      <div>
        <button
          style={{ marginBottom: "5px", width: "75px" }}
          type="button"
          class="btn btn-warning"
          onClick={() =>
            testCell(props.character_y - 1, props.character_x) &&
            props.uc(props.id, props.character_x, props.character_y - 1)
          }
        >
          {" "}
          Up
        </button>
      </div>
      <div style={{ display: "flex", flexDirection: "row-reverse" }}>
        <button
          style={{ marginBottom: "5px", marginRight: "2.5px", width: "75px" }}
          type="button"
          class="btn btn-warning"
          onClick={() =>
            testCell(props.character_y, props.character_x - 1) &&
            props.uc(props.id, props.character_x - 1, props.character_y)
          }
        >
          Right
        </button>
        <button
          style={{ marginBottom: "5px", marginLeft: "2.5px", width: "75px" }}
          type="button"
          class="btn btn-warning"
          onClick={() =>
            testCell(props.character_y, props.character_x + 1) &&
            props.uc(props.id, props.character_x + 1, props.character_y)
          }
        >
          Left
        </button>
      </div>
      <button
        style={{ marginBottom: "5px", width: "75px" }}
        type="button"
        class="btn btn-warning"
        onClick={() =>
          testCell(props.character_y + 1, props.character_x) &&
          props.uc(props.id, props.character_x, props.character_y + 1)
        }
      >
        {" "}
        Down
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

export default connect(mapStateToProps, { uc: updateCharacter })(Keypad);
