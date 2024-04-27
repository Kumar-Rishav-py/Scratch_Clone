import React, { useState } from "react";
import { connect } from "react-redux";

const GotoY = ({ character, comp_id }) => {
  const [state, setState] = useState({
    goto_y: 0,
  });

  // go to posiiton X and Y
  const gotoXY = () => {
    const el = document.getElementById(`${character.active}-div`);
    el.style.position = "relative";
    el.style.top = state.goto_y + "px";
  };
  return (


    <div className="relative h-12">
      <svg className=" h-16 cursor-pointer" onClick={() => gotoXY()}>
        <g>
          <path class="blocklyPath blocklyBlockBackground" stroke="#3373CC" fill="#4C97FF" fill-opacity="1" d="m 0,4 A 4,4 0 0,1 4,0 H 12 c 2,0 3,1 4,2 l 4,4 c 1,1 2,2 4,2 h 12 c 2,0 3,-1 4,-2 l 4,-4 c 1,-1 2,-2 4,-2 H 205.40122985839844 a 4,4 0 0,1 4,4 v 40  a 4,4 0 0,1 -4,4 H 48   c -2,0 -3,1 -4,2 l -4,4 c -1,1 -2,2 -4,2 h -12 c -2,0 -3,-1 -4,-2 l -4,-4 c -1,-1 -2,-2 -4,-2 H 4 a 4,4 0 0,1 -4,-4 z"></path>
        </g>
      </svg>
      <div
        id={comp_id}
        className="text-center rounded absolute top-0 left-0 z-10 pointer-events-none w-48 text-white px-2 py-1  text-sm cursor-pointer"

      >
        Go to Y : <input
          className="mx-2 p-1 py-0 text-center pointer-events-auto w-8 text-black"
          type="number"
          value={state.goto_y}
          onChange={(e) => {
            parseInt(e.target.value) !== 0 &&
              setState({ ...state, goto_y: parseInt(e.target.value) });
          }}
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

export default connect(mapStateToProps)(GotoY);
