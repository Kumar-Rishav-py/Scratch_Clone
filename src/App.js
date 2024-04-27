import React from "react";
import Sidebar from "./components/Sidebar";
import MidArea from "./components/MidArea";
import PreviewArea from "./components/PreviewArea";
import { DragDropContext } from "react-beautiful-dnd";
import { connect } from "react-redux";


function App({ complist, update_list }) {


  // Update Lists of Mid Area
  const onDragEnd = (result) => {
    let element = result.draggableId.split("-")[0];

    const old_list = complist.midAreaLists;
    let source_index = old_list.findIndex(
      (x) => x.id === result.source.droppableId
    );
    if (source_index > -1) {
      let comp_list = old_list[source_index].comps;
      comp_list.splice(result.source.index, 1);
      old_list[source_index].comps = comp_list;
    }

    let dest_index = old_list.findIndex(
      (x) => x.id === result.destination.droppableId
    );

    if (dest_index > -1) {
      let dest_comp_list = old_list[dest_index].comps;
      dest_comp_list.splice(result.destination.index, 0, `${element}`);

      old_list[dest_index].comps = dest_comp_list;
    }
  };







  return (
    <div className="bg-blue-100 font-sans ">
    
      <div className="nav">
        <div className="flex justify-between items-center h-1/2 mb-2"
          style={{
            backgroundColor: "#855cd6"
          }}
        >
          <div className=" h-8 w-16 ml-4 flex justify-center items-center">
            <img src="https://scratch.mit.edu/static/assets/90fb0caa5319c39b24946476dd32bb0d.svg"></img>
           
          </div>
          <div className="text-white mr-4 cursor-pointer">
            Sign In
          </div>
        </div>
        <div className="  w-full flex flex-row relative"
          style={{
            height: "calc(50% - 8px)"
          }}
        >
          <div className="flex-1 ">
            <div className="h-full  flex justify-center items-center w-24 rounded-t-2xl bg-white">
              Code
            </div>
          </div>
          <div className="w-1/3 flex ">
            {/* <div className="h-full bg-black">Run</div> */}
          </div>
        </div>
      </div>
      <div className="mainArea overflow-hidden flex flex-row">
        <DragDropContext onDragEnd={onDragEnd}>
          <div className="flex-1 h-full overflow-hidden flex flex-row bg-white border-t border-r border-gray-200 rounded-tr-xl mr-2">
            <Sidebar />

            <MidArea />
          </div>
          <div className="w-1/3 relative h-full overflow-scroll flex flex-row   rounded-xl ml-2">
            <PreviewArea />
          </div>
        </DragDropContext>
      </div>
    </div>
  );
}

// mapping state to props
const mapStateToProps = (state) => {
  return {
    complist: state.list,
  };
};

export default connect(mapStateToProps)(App);
