import React, { useState } from "react";
import { connect } from "react-redux";

const RandomGoto = ({ character, comp_id }) => {
  const randomCoordinate = () => {
    const x = Math.floor(Math.random() * 100); 
    const y = Math.floor(Math.random() * 100); 
    return { x, y };
  };

  const gotoXY = () => {
    const el = document.getElementById(`${character.active}-div`);
    const coordinates = randomCoordinate();
    el.style.position = "relative";
    el.style.left = coordinates.x + "px";
    el.style.top = coordinates.y + "px";
  };

  return (
    <div className="relative h-12">
      <svg
        className="h-16 cursor-pointer"
        onClick={() => gotoXY()}
      >
        <g>
          <path
            className="blocklyPath blocklyBlockBackground"
            stroke="#3373CC"
            fill="#4C97FF"
            fillOpacity="1"
            d="m 0,4 A 4,4 0 0,1 4,0 H 12 c 2,0 3,1 4,2 l 4,4 c 1,1 2,2 4,2 h 12 c 2,0 3,-1 4,-2 l 4,-4 c 1,-1 2,-2 4,-2 H 205.40122985839844 a 4,4 0 0,1 4,4 v 40  a 4,4 0 0,1 -4,4 H 48   c -2,0 -3,1 -4,2 l -4,4 c -1,1 -2,2 -4,2 h -12 c -2,0 -3,-1 -4,-2 l -4,-4 c -1,-1 -2,-2 -4,-2 H 4 a 4,4 0 0,1 -4,-4 z"
          ></path>
        </g>
      </svg>
      <div
        className="text-center rounded absolute top-0 left-0 z-10 pointer-events-none w-48 text-white px-2 py-1 text-sm cursor-pointer"
        id={comp_id} // Pass the component ID to the SVG element

      >
       Go to <select name="random" id="ye" className="text-black">
        <option value="random">Random Position</option>
       </select>
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

export default connect(mapStateToProps)(RandomGoto);
