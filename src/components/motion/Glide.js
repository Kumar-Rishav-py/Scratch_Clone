import React, { useState } from "react";
import { connect } from "react-redux";
import { setCharacterAngle } from "../../redux/character/actions";
import UndoIcon from "@material-ui/icons/Undo";


const TurnAntiClockWise = ({ character, characterAngle, comp_id }) => {
  const [angle, setAngle] = useState(0);

  // handle anti-clockwise rotation
  const handleClick = () => {
    let anti_angle = -1 * angle;
    const el = document.getElementById(character.active);
    const character_angle = character.characters.find(
      (x) => x.id === character.active
    );
    if (character_angle) {
      el.style.transform = `rotate(${character_angle.angle + anti_angle}deg)`;
      characterAngle(character_angle.angle + anti_angle);
    }
  };

  return (



    <div className="relative h-12">
      <svg className=" h-16 cursor-pointer" onClick={() => handleClick()}>
        <g>
          <path class="blocklyPath blocklyBlockBackground" stroke="#3373CC" fill="#4C97FF" fill-opacity="1" d="m 0,4 A 4,4 0 0,1 4,0 H 12 c 2,0 3,1 4,2 l 4,4 c 1,1 2,2 4,2 h 12 c 2,0 3,-1 4,-2 l 4,-4 c 1,-1 2,-2 4,-2 H 205.40122985839844 a 4,4 0 0,1 4,4 v 40  a 4,4 0 0,1 -4,4 H 48   c -2,0 -3,1 -4,2 l -4,4 c -1,1 -2,2 -4,2 h -12 c -2,0 -3,-1 -4,-2 l -4,-4 c -1,-1 -2,-2 -4,-2 H 4 a 4,4 0 0,1 -4,-4 z"></path>
        </g>
      </svg>
      <div
        id={comp_id}
        className={`flex rounded absolute pointer-events-none top-0 left-0 z-10 text-white w-52 px-2 py-1 my-1 text-sm cursor-pointer text-center`}

      >
        <div className="flex mx-auto">
          Turn
          <UndoIcon className="mx-2" />
          <input
            className="mx-2 p-1 py-0 pointer-events-auto text-center text-black w-8"
            type="number"
            value={angle}
            onChange={(e) => setAngle(parseInt(e.target.value))}
          /> degrees
        </div>
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

// mapping function to component
const mapDispatchToProps = (dispatch) => {
  return {
    characterAngle: (angle) => dispatch(setCharacterAngle(angle)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TurnAntiClockWise);
