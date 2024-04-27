import React, { useState } from "react";
import { connect } from "react-redux";
import Paper from "@material-ui/core/Paper";

const Size = ({ character, comp_id }) => {
  const [state, setState] = useState({
    scale: 1,
  });
  // To change Size of Sprint
  const changeSize = () => {
    const el = document.getElementById(character.active);
    el.style.transform = `scale(${state.scale})`;
  };

  return (
    <div className="relative h-12">
      <svg className="h-16">
        <g>
          <path
            className="blocklyPath blocklyBlockBackground"
            stroke="#774DCB"
            fill="#9966FF"
            fillOpacity="1"
            d="m 0,4 A 4,4 0 0,1 4,0 H 12 c 2,0 3,1 4,2 l 4,4 c 1,1 2,2 4,2 h 12 c 2,0 3,-1 4,-2 l 4,-4 c 1,-1 2,-2 4,-2 H 170 a 4,4 0 0,1 4,4 v 40  a 4,4 0 0,1 -4,4 H 48   c -2,0 -3,1 -4,2 l -4,4 c -1,1 -2,2 -4,2 h -12 c -2,0 -3,-1 -4,-2 l -4,-4 c -1,-1 -2,-2 -4,-2 H 4 a 4,4 0 0,1 -4,-4 z"

          ></path>
        </g>
      </svg>
      <div
        id={comp_id}
        className="text-center absolute top-0 left-0 z-10  text-white px-2 py-1 my-2 text-sm cursor-pointer"
        onClick={() => changeSize()}
      >
        Change size by <input
          className="mx-2 p-1 py-0 text-center w-10 text-black"

          type="number"
          value={state.scale}
          onChange={(e) =>
            setState({ ...state, scale: parseInt(e.target.value) })
          }
        />
      </div>
    </div>

  );
};

// mapping state to component
const mapStateToProps = (state) => {
  return {
    character: state.character,
  };
};

export default connect(mapStateToProps)(Size);
