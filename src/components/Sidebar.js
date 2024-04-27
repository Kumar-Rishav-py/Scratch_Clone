import React, { useRef } from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import { getComponent } from "./getComponents";
import {
  motionComponents,
  looksComponents,
  controlComponents,
  eventsComponents,
} from "./SidebarConstants";

export default function Sidebar() {

  const looksRef = useRef(null);
  const motionsRef = useRef(null);
  const eventsRef = useRef(null);
  const scrollToLooks = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="flex overflow-x-hidden">
      <div className="w-12 border-r h-full py-4 text-xs">

        <div
          onClick={() => scrollToLooks(motionsRef)}
          className="flex flex-col items-center cursor-pointer">
          <div className=" h-5 w-5 rounded-full cursor-pointer"
            style={{
              backgroundColor: "#4c97ff",
              borderColor: "#3373cc"
            }}
          ></div>
          <div className="cursor-pointer">Motion</div>
        </div>
        <div
          onClick={() => scrollToLooks(looksRef)}
          className="flex flex-col items-center my-4">
          <div className=" h-5 w-5 rounded-full cursor-pointer"
            style={{
              backgroundColor: "#9966ff",
              borderColor: "#774dcb"
            }}

          ></div>
          <div className="cursor-pointer">Looks</div>
        </div>


        <div
          onClick={() => scrollToLooks(eventsRef)}
          className="flex flex-col items-center ">
          <div className=" h-5 w-5 rounded-full cursor-pointer"
            style={{
              backgroundColor: "#ffbf00",
              borderColor: "#cc9900"
            }}
          ></div>
          <div className="cursor-pointer">Events</div>
        </div>
      </div>
      <div className="w-60 flex-none h-full overflow-y-auto  flex flex-col items-start p-2 border-r border-gray-200 overflow-x-hidden">

        {/* Motion */}
        <div ref={motionsRef} className="font-bold"> {"Motion"} </div>
        <Droppable droppableId="sideArea-motion" type="COMPONENTS">
          {(provided) => (
            <ul
              className="sideArea-motion my-3"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {motionComponents.map((x, i) => {
                return (
                  <Draggable
                    key={`${x}-sideArea`}
                    draggableId={`${x}-sideArea`}
                    index={i}
                  >
                    {(provided) => (
                      <li
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className="my-2"
                      >
                        {getComponent(x)}
                      </li>
                    )}
                  </Draggable>
                );
              })}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>

        {/* Looks */}
        <div ref={looksRef} className="font-bold"> {"Looks"} </div>
        <Droppable droppableId="sideArea-looks" type="COMPONENTS">
          {(provided) => (
            <ul
              className="sideArea-looks my-3"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {looksComponents.map((x, i) => {
                return (
                  <Draggable
                    key={`${x}-sideArea`}
                    draggableId={`${x}-sideArea`}
                    index={i}
                  >
                    {(provided) => (
                      <li
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className="my-2"
                      >
                        {getComponent(x)}
                      </li>
                    )}
                  </Draggable>
                );
              })}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>

        {/* Control */}
        {/* <div className="font-bold"> {"Control"} </div>
        <Droppable droppableId="sideArea-control" type="COMPONENTS">
          {(provided) => (
            <ul
              className="sideArea-control my-3"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {controlComponents.map((x, i) => {
                return (
                  <Draggable
                    key={`${x}-sideArea`}
                    draggableId={`${x}-sideArea`}
                    index={i}
                  >
                    {(provided) => (
                      <li
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className="my-2"
                      >
                        {getComponent(x)}
                      </li>
                    )}
                  </Draggable>
                );
              })}
              {provided.placeholder}
            </ul>
          )}
        </Droppable> */}

        {/* Events */}
        <div ref={eventsRef} className="font-bold"> {"Events"} </div>
        <Droppable droppableId="sideArea-motion" type="COMPONENTS">
          {(provided) => (
            <ul
              className="sideArea-motion my-3"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {eventsComponents.map((x, i) => {
                return (
                  <Draggable
                    key={`${x}-sideArea`}
                    draggableId={`${x}-sideArea`}
                    index={i}
                  >
                    {(provided) => (
                      <li
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className="my-2"
                      >
                        {getComponent(x)}
                      </li>
                    )}
                  </Draggable>
                );
              })}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
        <div className=" min-h-screen w-4"></div>
      </div>
    </div>
  );
}
