import PropTypes from "prop-types";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import CubeList2 from "../CubeList2/CubeList2";

const CubeSection2 = ({ lang }) => {
  return (
    <>
      <DndProvider backend={HTML5Backend}>
        <CubeList2 lang={lang} />
      </DndProvider>
    </>
  );
};

CubeSection2.propTypes = {
  lang: PropTypes.string,
};

export default CubeSection2;
