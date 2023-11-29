import { RotatingLines } from "react-loader-spinner";
import { LoaderBox } from "./LoaderStyled";

const Loader = () => {  
  return (
    <LoaderBox>
      <RotatingLines
        strokeColor="blue"
        strokeWidth="5"
        animationDuration="0.9"
        width="96"
        visible={true}
      />
    </LoaderBox>
  );
};

export default Loader;