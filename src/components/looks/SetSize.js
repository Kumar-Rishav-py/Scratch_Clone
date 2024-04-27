import React, { useState } from "react";
import { connect } from "react-redux";

const SetSize = ({ character, comp_id }) => {
  const [state, setState] = useState({
    percentage: 100, // Changed from scale to percentage
  });

  const changeSize = () => {
    const el = document.getElementById(character.active);
    el.style.transform = `scale(${state.percentage / 100})`;
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
        Set size to{" "}
        <input
          className="mx-2 p-1 py-0 text-center w-10 text-black"
          type="number"
          value={state.percentage} // Changed from scale to percentage
          onChange={(e) =>
            setState({ ...state, percentage: parseInt(e.target.value) }) // Changed from scale to percentage
          }
        />
        %
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    character: state.character,
  };
};

export default connect(mapStateToProps)(SetSize);
