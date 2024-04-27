import React, { useState, useRef, useEffect } from "react";
import { connect } from "react-redux";

// Move Component for Sidebar
const Move = ({ character, comp_id }) => {
  const [steps, setSteps] = useState(0);
  const inputRef = useRef(null);
  const divRef = useRef(null);
  const svgRef = useRef(null);

  useEffect(() => {
    // Adjust input width based on content
    if (inputRef.current) {
      inputRef.current.style.width = `${inputRef.current.value.length * 8 > 20 ? inputRef.current.value.length * 8 : 20
        }px`;
    }
    // Adjust div width based on input width
    if (divRef.current && inputRef.current) {
      divRef.current.style.width = `${inputRef.current.offsetWidth + 128 > 128 ? inputRef.current.offsetWidth + 128 : 128
        }px`;
    }
    // Adjust SVG width based on input width
    if (svgRef.current && inputRef.current) {
      svgRef.current.style.width = `${inputRef.current.offsetWidth + 128 > 128 ? inputRef.current.offsetWidth + 128 : 128
        }px`;
    }
  }, [steps]); // Run effect when steps change

  // Function used for moiving Sprint
  const handleClick = () => {
    const el = document.getElementById(`${character.active}-div`);

    var left = el.offsetLeft;
    el.style.position = "relative";
    el.style.left = left + steps + "px";
  };

  // Calculate d attribute value based on input width
  const calculatePath = (width) => {
    const constantPart = 145.40122985839844;
    return `m 0,4 A 4,4 0 0,1 4,0 H 12 c 2,0 3,1 4,2 l 4,4 c 1,1 2,2 4,2 h 12 c 2,0 3,-1 4,-2 l 4,-4 c 1,-1 2,-2 4,-2 H ${width + constantPart} a 4,4 0 0,1 4,4 v 40  a 4,4 0 0,1 -4,4 H 48   c -2,0 -3,1 -4,2 l -4,4 c -1,1 -2,2 -4,2 h -12 c -2,0 -3,-1 -4,-2 l -4,-4 c -1,-1 -2,-2 -4,-2 H 4 a 4,4 0 0,1 -4,-4 z`
  };
  return (

    <div className="relative h-12">
      <svg ref={svgRef} onClick={() => handleClick()} className="h-16  cursor-pointer">
        <g>
          <path
            className="blocklyPath blocklyBlockBackground"
            stroke="#3373CC"
            fill="#4C97FF"
            fillOpacity="1"
            d={inputRef.current ? calculatePath(inputRef.current.offsetWidth - 22) : calculatePath(-10)}
          ></path>
        </g>
      </svg>
      <div
        ref={divRef}
        id={comp_id}
        // bg-blue-700
        className={`text-center pointer-events-none absolute top-0 left-0 z-10 rounded w-36 flex justify-center items-center text-white p-2 my-2 text-xs `}

      >
        Move X
        <input
          type="number"
          className="text-black pointer-events-auto text-center w-5 mx-2"
          inputmode="numeric"
          value={steps}

          ref={inputRef}
          onChange={(e) => setSteps(parseInt(e.target.value))}
        />
        steps
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

export default connect(mapStateToProps)(Move);
