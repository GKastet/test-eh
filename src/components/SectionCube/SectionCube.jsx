import { CubeList } from "./SectionCubeStyled";
import { cubeItems } from "../helpers/cubeItems";
import CubeItem from "../CubeItem/CubeItem";

const SectionCube = () => {
  return (
    <>
      <CubeList>
        {cubeItems.map((item) => {
          return <CubeItem key={item.id} item={item} />;
        })}
      </CubeList>
    </>
  );
};

export default SectionCube;
