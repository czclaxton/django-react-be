import React from "react";

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
            let color = "";
            if (cell.type === "floor") {
              color = "brown";
            }
            if (cell.type === "door") {
              color = "gray";
            }
            if (cell.type === 0) {
              color = "black";
            }
            return (
              <div
                style={{
                  backgroundColor: color,
                  width: 22,
                  height: 22,
                  display: "inline-block"
                }}
              />
            );
          })}
        </div>
      ))}
    </>
  );
};

export default Display;
