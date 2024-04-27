import React from "react";
import { connect } from "react-redux";
import Paper from "@material-ui/core/Paper";

const HideMessage = ({ character, comp_id }) => {
  /* Hide Message */
  const displayMessage = () => {
    window.clearTimeout();
    const el = document.getElementById(`${character.active}-message-box`);
    const el2 = document.getElementById(`${character.active}-message-box1`);
    el.style.display = "none";
    el2.style.display = "none";
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
            d="m 0,4 A 4,4 0 0,1 4,0 H 12 c 2,0 3,1 4,2 l 4,4 c 1,1 2,2 4,2 h 12 c 2,0 3,-1 4,-2 l 4,-4 c 1,-1 2,-2 4,-2 H 120 a 4,4 0 0,1 4,4 v 40  a 4,4 0 0,1 -4,4 H 48   c -2,0 -3,1 -4,2 l -4,4 c -1,1 -2,2 -4,2 h -12 c -2,0 -3,-1 -4,-2 l -4,-4 c -1,-1 -2,-2 -4,-2 H 4 a 4,4 0 0,1 -4,-4 z"
          ></path>
        </g>
      </svg>
      <div
        id={comp_id}
        onClick={() => displayMessage()}
        className="rounded absolute top-0 left-0 z-10 text-center text-white text-sm max-w-content p-1 my-3"
      >
        Hide Message
      </div>
    </div>

  );
};

// mapping state to props
const mapStateToProps = (state) => {
  return {
    character: state.character,
  };
};

export default connect(mapStateToProps)(HideMessage);
