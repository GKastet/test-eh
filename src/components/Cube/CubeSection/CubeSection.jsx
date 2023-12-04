import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import CubeList from "../CubeList/CubeList";

const CubeSection = () => {
  return (
    <>
      <DndProvider backend={HTML5Backend}>
        <CubeList />
      </DndProvider>
    </>
  );
};

export default CubeSection;