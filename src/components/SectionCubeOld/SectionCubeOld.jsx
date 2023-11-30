import { CubeList } from "./SectionCubeStyled";
import { cubeItems } from "../helpers/cubeItems";
import CubeItem from "../CubeItemOld/CubeItemOld";

const SectionCubeOld = () => {
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

export default SectionCubeOld;
