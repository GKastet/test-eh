import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import CubeList2 from "../CubeList2/CubeList2";

const CubeSection2 = () => {
  return (
    <>
      <DndProvider backend={HTML5Backend}>
        <CubeList2 />
      </DndProvider>
    </>
  );
};

export default CubeSection2;