import PropTypes from 'prop-types';
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import CubeList from "../CubeList/CubeList";

const CubeSection = ({lang}) => {
  return (
    <>
      <DndProvider backend={HTML5Backend}>
        <CubeList lang={lang}/>
      </DndProvider>
    </>
  );
};

CubeSection.propTypes = {
  lang: PropTypes.string
};

export default CubeSection;
