import React, { useState, useRef, useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import { useSnackbar } from "notistack";

const BroadcastMessage = ({ comp_id }) => {
  const { enqueueSnackbar } = useSnackbar();
  const [state, setState] = useState({
    message: "",
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
      divRef.current.style.width = `${inputRef.current.offsetWidth + 100 > 100 ? inputRef.current.offsetWidth + 100 : 100
        }px`;
    }
    // Adjust SVG width based on input width
    if (svgRef.current && inputRef.current) {
      svgRef.current.style.width = `${inputRef.current.offsetWidth + 100 > 100 ? inputRef.current.offsetWidth + 100 : 100
        }px`;
    }
  }, [state]); // Run effect when steps change


  /* Display Snackbar */
  const handleClick = () => {
    enqueueSnackbar(state.message, { variant: "info" });
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
            stroke="#CC9900"
            fill="#FFBF00"
            fillOpacity="1"
            d={inputRef.current ? calculatePath(inputRef.current.offsetWidth - 50) : calculatePath(-20)}
          ></path>
        </g>
      </svg>
      <div
        id={comp_id}
        className="rounded absolute top-0 left-0 z-10 flex flex-row flex-wrap  text-white px-2 py-1 my-2 text-sm cursor-pointer"
        onClick={() => handleClick()}
      >
        {`Broadcast`}
        <input
          className="mx-2 p-1 py-0 text-center text-black w-32"
          type="text"
          ref={inputRef}
          value={state.message}
          onChange={(e) => {
            e.target.value.length > 0 &&
              setState({ message: e.target.value });
          }}
        />
      </div>
    </div>

  );
};

export default BroadcastMessage;
