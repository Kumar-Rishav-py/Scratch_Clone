import React, { useState, useRef, useEffect } from "react";
import { connect } from "react-redux";
import Paper from "@material-ui/core/Paper";

const ThinkWithTimer = ({ character, comp_id }) => {
  const [state, setState] = useState({
    show_msg: false,
    timer_message: "",
    timer_for_msg: 0,
  });


  const inputRef = useRef(null);
  const divRef = useRef(null);
  const svgRef = useRef(null);

  useEffect(() => {
    // Adjust input width based on content
    if (inputRef.current) {
      inputRef.current.style.width = `${inputRef.current.value.length * 8 > 45 ? inputRef.current.value.length * 8 : 45
        }px`;
    }
    // Adjust div width based on input width
    if (divRef.current && inputRef.current) {
      divRef.current.style.width = `${inputRef.current.offsetWidth + 175 > 175 ? inputRef.current.offsetWidth + 175 : 175
        }px`;
    }
    // Adjust SVG width based on input width
    if (svgRef.current && inputRef.current) {
      svgRef.current.style.width = `${inputRef.current.offsetWidth + 175 > 175 ? inputRef.current.offsetWidth + 175 : 175
        }px`;
    }
  }, [state]); // Run effect when steps change

  /* Display Think Message with Timer */
  const displayMessage = () => {
    const el = document.getElementById(`${character.active}-message-box`);
    const el2 = document.getElementById(`${character.active}-message-box1`);
    if (state.show_msg && state.character_id === character.active) {
      setState({ ...state, show_msg: false });
      el.style.display = "none";
      el2.style.display = "none";
      return;
    }
    setState({ ...state, show_msg: true });
    el.style.display = "inline-block";
    el.style.position = "relative";

    el2.style.display = "block";
    el2.style.position = "relative";

    el.innerHTML = state.timer_message;
    window.setTimeout(() => {
      setState({ ...state, show_msg: false });
      el.style.display = "none";
      el2.style.display = "none";
    }, state.timer_for_msg * 1000);
  };



  // Calculate d attribute value based on input width
  const calculatePath = (width) => {
    const constantPart = 145.40122985839844;
    return `m 0,4 A 4,4 0 0,1 4,0 H 12 c 2,0 3,1 4,2 l 4,4 c 1,1 2,2 4,2 h 12 c 2,0 3,-1 4,-2 l 4,-4 c 1,-1 2,-2 4,-2 H ${width + constantPart} a 4,4 0 0,1 4,4 v 40  a 4,4 0 0,1 -4,4 H 48   c -2,0 -3,1 -4,2 l -4,4 c -1,1 -2,2 -4,2 h -12 c -2,0 -3,-1 -4,-2 l -4,-4 c -1,-1 -2,-2 -4,-2 H 4 a 4,4 0 0,1 -4,-4 z`
  };
  return (
    <div className="relative h-12">
      <svg ref={svgRef} className="h-16">
        <g>
          <path
            className="blocklyPath blocklyBlockBackground"
            stroke="#774DCB"
            fill="#9966FF"
            fillOpacity="1"
            d={inputRef.current ? calculatePath(inputRef.current.offsetWidth + 10) : calculatePath(60)}
          ></path>
        </g>
      </svg>

      <div
        id={comp_id}
        className="flex flex-row absolute top-0 left-0 z-10 flex-wrap text-center  text-white px-2 py-1 my-2 text-sm cursor-pointer"
        onClick={() => displayMessage()}
      >
        {`Think`}
        <input
          className="mx-2 p-1 py-0 text-center w-16 text-black"
          type="text"
          ref={inputRef}
          value={state.timer_message}
          onChange={(e) => {
            e.target.value.length > 0 &&
              setState({ ...state, timer_message: e.target.value });
          }}
        />
        for
        <input
          className="mx-2 p-1 py-0 text-center w-16 text-black"
          type="number"
          value={state.timer_for_msg}
          onChange={(e) => {
            parseInt(e.target.value) > 0 &&
              setState({ ...state, timer_for_msg: parseInt(e.target.value) });
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

export default connect(mapStateToProps)(ThinkWithTimer);
